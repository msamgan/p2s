<?php

declare(strict_types=1);

namespace App\Actions\Rate;

use App\Models\Rate;

final class UpdateRate
{
    public function handle(Rate $rate, array $data): Rate
    {
        $rate->update($data);

        return $rate;
    }
}
