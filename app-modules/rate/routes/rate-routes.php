<?php

declare(strict_types=1);

// use P2s\Rate\Http\Controllers\RateController;

use P2s\Rate\Http\Controllers\RateController;

Route::get('rates', [RateController::class, 'index'])->name('rates.index');
// Route::get('/rates/create', [RateController::class, 'create'])->name('rates.create');
// Route::post('/rates', [RateController::class, 'store'])->name('rates.store');
// Route::get('/rates/{rate}', [RateController::class, 'show'])->name('rates.show');
// Route::get('/rates/{rate}/edit', [RateController::class, 'edit'])->name('rates.edit');
// Route::put('/rates/{rate}', [RateController::class, 'update'])->name('rates.update');
// Route::delete('/rates/{rate}', [RateController::class, 'destroy'])->name('rates.destroy');
