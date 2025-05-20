<?php

declare(strict_types=1);

use App\Enums\ValueTypeEnum;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('rates', function (Blueprint $table) {
            $table->id();
            $table->foreignId('business_id')->default(1)->constrained();
            $table->string('service_identifier');
            $table->string('country_code');
            $table->float('weight');
            $table->string('weight_unit')->default(App\Enums\WeightUnitEnum::Kg);
            $table->float('base_rate');
            $table->float('markup_value')->default(0);
            $table->string('markup_type')->default(ValueTypeEnum::Percentage);
            $table->float('markup')->default(0);
            $table->float('surcharges')->default(0);
            $table->float('rate')->default(0);
            $table->string('currency')->default(App\Enums\CurrencyEnum::AED);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('rates');
    }
};
