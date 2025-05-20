<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->foreignId('business_id')->default(1)->constrained();
            $table->string('identifier');
            $table->string('name');
            $table->string('company')->nullable();
            $table->timestamps();
        });

        App\Models\Service::query()->create([
            'business_id' => 1,
            'identifier' => 'priority_export_express',
            'name' => 'Priority Export Express',
            'company' => 'Aramex',
        ]);
    }

    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
