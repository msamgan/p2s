<?php

declare(strict_types=1);

namespace App\Console\Commands;

use App\Actions\Rate\CreateRate;
use App\Enums\CurrencyEnum;
use App\Stores\CountryStore;
use App\Stores\RateStore;
use Illuminate\Console\Command;
use Illuminate\Contracts\Console\Isolatable;

final class RateForAe extends Command implements Isolatable
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:rate-ae {constAmount=16} {constAmountWeightLimit=5} {--additionAmount=1.5} {limit=50}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Rate for AE from AE';

    /**
     * Execute the console command.
     */
    public function handle(CountryStore $countryStore, RateStore $rateStore, CreateRate $createRate): int
    {
        $constAmount = $this->argument('constAmount');
        $constAmountWeightLimit = $this->argument('constAmountWeightLimit');
        $additionAmount = $this->option('additionAmount');

        $countryStore->createOrFind(countryName: 'United Arab Emirates', countryCode: 'AE');

        $rateStore->dumpCountryRate('AE');

        for ($i = 0.5; $i <= $constAmountWeightLimit; $i += 0.5) {
            $createRate->handle($rateStore->excelRowMapper(['AE', $i, 'kg', $constAmount, 0, 'fixed', 0, 0, $constAmount, CurrencyEnum::AED->value]));
        }

        $nextLoopStarter = $constAmountWeightLimit + 0.5;
        $nextLoopLimit = $this->argument('limit');

        $counter = 1;
        for ($i = $nextLoopStarter; $i <= $nextLoopLimit; $i += 0.5) {
            $amount = $constAmount + ($additionAmount * $counter);
            $createRate->handle($rateStore->excelRowMapper(['AE', $i, 'kg', $amount, 0, 'fixed', 0, 0, $amount, CurrencyEnum::AED->value]));
            $counter++;
        }

        return self::SUCCESS;
    }
}
