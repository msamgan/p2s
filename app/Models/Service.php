<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

final class Service extends Model
{
    protected $fillable = [
        'business_id',
        'identifier',
        'name',
        'company',
    ];

    public function rates(): HasMany
    {
        return $this->hasMany(Rate::class, 'service_identifier', 'identifier');
    }

    public function business(): BelongsTo
    {
        return $this->belongsTo(Business::class);
    }
}
