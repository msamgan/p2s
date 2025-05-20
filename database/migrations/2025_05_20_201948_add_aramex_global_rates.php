<?php

declare(strict_types=1);

use App\Actions\Rate\CreateRate;
use App\Enums\CurrencyEnum;
use App\Stores\CountryStore;
use App\Stores\RateStore;
use Illuminate\Database\Migrations\Migration;
use Maatwebsite\Excel\Facades\Excel;

return new class extends Migration
{
    public function up(): void
    {
        $data = Excel::toArray((object) [], public_path('samples/Aramex.xlsx'));
        $rateSheet = $data[0];
        $rateStore = app(RateStore::class);
        $createRate = app(CreateRate::class);
        $service = 'priority_export_express';

        foreach ($rateSheet as $index => $row) {
            if ($index === 0) {
                continue;
            }

            $counterName = mb_trim($row[0]);
            $countryCode = mb_trim($row[1]);
            app(CountryStore::class)->createOrFind(countryName: $counterName, countryCode: $countryCode);

            $counter = 18;
            for ($i = 0.5; $i <= 5; $i += 0.5) {
                $createRate->handle($rateStore->excelRowMapper([$countryCode, $i, 'kg', $row[$counter], 0, 'fixed', 0, 0, $row[$counter], CurrencyEnum::AED->value, $service]));
                $counter++;
            }

            $counter = 1;
            for ($i = 5.5; $i <= 50; $i += 0.5) {
                $amount = $row[27] + ($row[28] * $counter);
                $createRate->handle($rateStore->excelRowMapper([$countryCode, $i, 'kg', $amount, 0, 'fixed', 0, 0, $amount, CurrencyEnum::AED->value, $service]));
                $counter++;
            }
        }
    }

    public function down(): void
    {
        //
    }
};
