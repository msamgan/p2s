<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\Notification\NotifyUser;
use App\Actions\Rate\CreateRate;
use App\Actions\Rate\UpdateRate;
use App\Http\Requests\StoreRateRequest;
use App\Models\Rate;
use App\Notifications\RateCreated;
use App\Stores\RateStore;
use Exception;
use Illuminate\Database\Eloquent\Collection;
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

    #[Action(middleware: ['auth', 'check_has_business', 'can:rate.list'])]
    public function rates(): Collection
    {
        return Rate::query()->get();
    }
}
