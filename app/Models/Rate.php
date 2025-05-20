<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\RateFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

final class Rate extends Model
{
    /** @use HasFactory<RateFactory> */
    use HasFactory;

    protected $fillable = [
        'country_code',
        'weight',
        'weight_unit',
        'base_rate',
        'markup_value',
        'markup_type',
        'markup',
        'surcharges',
        'rate',
        'currency',
        'service_identifier',
    ];
}
