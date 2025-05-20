<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    public function up(): void
    {
        Artisan::call('app:rate-ae');
    }

    public function down(): void
    {
        //
    }
};
