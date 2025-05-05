<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\Notification\NotifyUser;
use App\Actions\Rate\CreateRate;
use App\Actions\Rate\UpdateRate;
use App\Http\Requests\DeleteRateRequest;
use App\Http\Requests\StoreRateRequest;
use App\Http\Requests\UpdateRateRequest;
use App\Models\Rate;
use App\Notifications\RateCreated;
use App\Notifications\RateDeleted;
use App\Notifications\RateUpdated;
use Exception;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use Msamgan\Lact\Attributes\Action;
use Throwable;

final class RateController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Rate/Index');
    }

    /**
     * @throws Exception|Throwable
     */
    #[Action(method: 'post', middleware: ['auth', 'check_has_business', 'can:rate.create'])]
    public function store(StoreRateRequest $request, CreateRate $createRate, NotifyUser $notifyUser): void
    {
        DB::beginTransaction();

        try {
            $rate = $createRate->handle($request->validated());

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
    public function rates(): Collection
    {
        return Rate::query()->get();
    }
}
