<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

final class Country extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'name',
        'code',
    ];

    public function rates()
    {
        return $this->hasMany(Rate::class, 'country_code', 'code');
    }
}
