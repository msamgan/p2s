<?php

declare(strict_types=1);

namespace App\Models;

use App\Concerns\ModelFunctions;
use Database\Factories\RateFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property string $country_code
 * @property float $weight
 * @property string $weight_unit
 * @property float $base_rate
 * @property float $markup_value
 * @property string $markup_type
 * @property float $markup
 * @property float $surcharges
 * @property float $rate
 * @property string $currency
 * @property string $service_identifier
 * @property mixed $service
 */
final class Rate extends Model
{
    /** @use HasFactory<RateFactory> */
    use HasFactory;

    use ModelFunctions;

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

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class, 'service_identifier', 'identifier');
    }

    protected function casts(): array
    {
        return [
            'weight' => 'float',
            'base_rate' => 'float',
            'markup_value' => 'float',
            'markup' => 'float',
            'surcharges' => 'float',
            'rate' => 'float',
        ];
    }
}
