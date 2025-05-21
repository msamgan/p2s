<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Welcome')->name('welcome');
Route::inertia('rates-and-services', 'RatesAndServices')->name('rates.services');
Route::inertia('dashboard', 'Dashboard')->middleware(['auth', 'verified'])->name('dashboard');
