<?php

declare(strict_types=1);

namespace App\Stores;

use App\Models\Country;

final class CountryStore
{
    public function createOrFind(string $countryName, string $countryCode)
    {
        return Country::query()->where('code', $countryCode)->first() ?: Country::query()->create([
            'name' => $countryName,
            'code' => $countryCode,
        ]);
    }
}
