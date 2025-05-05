<?php

declare(strict_types=1);

use App\Actions\Business\CreateBusiness;
use App\Actions\Role\AssignRole;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Hash;

return new class extends Migration
{
    public function up(): void
    {
        $businessName = 'P2S';

        $user = User::query()->create([
            'name' => 'Main Admin',
            'email' => 'main.admin@p2s.com',
            'password' => Hash::make('Main@2025'),
            'email_verified_at' => now(),
        ]);

        (new AssignRole)->handle(user: $user, role: Role::business(), makeRoleActive: true);

        (new CreateBusiness)->handle(user: $user, businessName: $businessName, makeBusinessActive: true);
    }

    public function down(): void
    {
        //
    }
};
