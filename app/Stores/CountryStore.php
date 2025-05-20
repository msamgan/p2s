<?php

declare(strict_types=1);

namespace App\Stores;

use App\Models\Country;

final class CountryStore
{
    public function createOrFind(string $countryName, string $countryCode)
    {
        $country = Country::query()
            ->where('code', $countryCode)
            ->first();

        if ($country) {
            return $country;
        }

        return Country::query()->create([
            'name' => $countryName,
            'code' => $countryCode,
        ]);
    }
}
