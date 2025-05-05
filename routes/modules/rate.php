<?php

declare(strict_types=1);

use App\Enums\PermissionEnum;
use App\Http\Controllers\RateController;
use Illuminate\Support\Facades\Route;

Route::get('rate', [RateController::class, 'index'])
    ->middleware([PermissionEnum::RateList->can(), 'auth', 'check_has_business'])
    ->name('rate.index');
