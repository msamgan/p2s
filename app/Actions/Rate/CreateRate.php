<?php

declare(strict_types=1);

namespace App\Actions\Rate;

use App\Models\Rate;

final class CreateRate
{
    public function handle(array $data): Rate
    {
        return Rate::query()->create($data);
    }
}
