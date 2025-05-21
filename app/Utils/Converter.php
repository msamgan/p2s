<?php

declare(strict_types=1);

namespace App\Utils;

final class Converter
{
    public static function calculateChargeableWeight(float $length, float $width, float $height, float $weight): float
    {
        return max(self::roundToNextHalf(round($weight, 2)), self::roundToNextHalf(round(($length * $width * $height) / 5000, 2)));
    }

    public static function roundToNextHalf(float $number): float
    {
        return ceil($number * 2) / 2;
    }
}
