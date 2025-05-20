<?php

declare(strict_types=1);

namespace App\Stores;

use App\Models\Rate;

final class RateStore
{
    public function rateByCountryAndWeight(string $countryCode, float $weight): ?Rate
    {
        return Rate::query()
            ->where('country_code', $countryCode)
            ->where('weight', $weight)
            ->first();
    }

    public function excelRowMapper(array $row): array
    {
        return [
            'country_code' => $row[0],
            'weight' => $row[1],
            'weight_unit' => $row[2],
            'base_rate' => $row[3],
            'markup_value' => $row[4],
            'markup_type' => $row[5],
            'markup' => $row[6],
            'surcharges' => $row[7],
            'rate' => $row[8],
            'currency' => $row[9],
        ];
    }

    public function dumpCountryRate(string $countryCode): void
    {
        Rate::query()->where('country_code', $countryCode)->delete();
    }
}
