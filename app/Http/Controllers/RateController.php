<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\Notification\NotifyUser;
use App\Actions\Rate\CreateRate;
use App\Actions\Rate\UpdateRate;
use App\Http\Requests\DeleteRateRequest;
use App\Http\Requests\StoreRateRequest;
use App\Http\Requests\UpdateRateRequest;
use App\Models\Country;
use App\Models\Rate;
use App\Notifications\RateCreated;
use App\Notifications\RateDeleted;
use App\Notifications\RateUpdated;
use App\Stores\RateStore;
use App\Utils\Converter;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use Maatwebsite\Excel\Facades\Excel;
use Msamgan\Lact\Attributes\Action;
use Throwable;

final class RateController extends Controller
{
    public function __construct(private readonly RateStore $rateStore) {}

    public function index(): Response
    {
        return Inertia::render('Rate/Index');
    }

    /**
     * @throws Exception|Throwable
     */
    #[Action(method: 'post', middleware: ['auth', 'check_has_business', 'can:rate.create'])]
    public function store(StoreRateRequest $request, CreateRate $createRate, UpdateRate $updateRate, NotifyUser $notifyUser): void
    {
        DB::beginTransaction();

        try {
            $data = Excel::toArray((object) [], $request->file('rate'));
            $rateSheet = $data[0];

            foreach ($rateSheet as $index => $row) {
                if ($index === 0) {
                    continue;
                }

                $dataArray = $this->rateStore->excelRowMapper(row: $row);
                $rate = $this->rateStore->rateByCountryAndWeight(countryCode: $row[0], weight: $row[1]);

                $rate instanceof Rate ? $updateRate->handle(rate: $rate, data: $dataArray) : $createRate->handle(data: $dataArray);
            }

            $notifyUser->handle(new RateCreated(auth()->user()));

            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    #[Action(params: ['rate'], middleware: ['auth', 'check_has_business', 'can:rate.view'])]
    public function show(Rate $rate): Rate
    {
        // Access::businessCheck(businessId: $rate->business_id);

        return $rate;
    }

    #[Action(method: 'post', params: ['rate'], middleware: ['auth', 'check_has_business', 'can:rate.update'])]
    public function update(UpdateRateRequest $request, Rate $rate, UpdateRate $updateRate, NotifyUser $notifyUser): void
    {
        $updateRate->handle($rate, $request->validated());

        $notifyUser->handle(new RateUpdated(auth()->user()));
    }

    #[Action(method: 'delete', params: ['rate'], middleware: ['auth', 'check_has_business', 'can:rate.delete'])]
    public function destroy(DeleteRateRequest $request, Rate $rate, NotifyUser $notifyUser): void
    {
        $notifyUser->handle(new RateDeleted(auth()->user()));

        $rate->delete();
    }

    #[Action(middleware: ['auth', 'check_has_business', 'can:rate.list'])]
    public function rates()
    {
        return Rate::query()->paginate(200);
    }

    #[Action]
    public function showRates(Request $request): Collection
    {
        return Rate::query()
            ->where('business_id', 1)
            ->where('country_code', mb_strtoupper((string) $request->get('to')))
            ->where('weight', Converter::calculateChargeableWeight(
                length: (float) $request->get('length'),
                width: (float) $request->get('width'),
                height: (float) $request->get('height'),
                weight: (float) $request->get('weight')
            ))->with('service')
            ->get()->map(fn (Rate $rate): array => [
                'country_code' => $rate->key('country_code'),
                'weight' => $rate->key('weight'),
                'weight_unit' => $rate->key('weight_unit'),
                'rate' => $rate->key('rate'),
                'currency' => mb_strtoupper($rate->currency),
                'service' => $rate->service->key('name'),
                'company' => $rate->service->key('company'),
                'logo' => url('img/aramex.png'),
                'delivery_time' => $rate->key('country_code') === 'AE' ? '1-2 Days' : '--',
            ]);
    }

    #[Action]
    public function countries()
    {
        return Country::query()->get();
    }
}
