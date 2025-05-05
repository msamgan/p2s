<?php

declare(strict_types=1);

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Translation\PotentiallyTranslatedString;
use Maatwebsite\Excel\Facades\Excel;

final class RateFile implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  Closure(string, ?string=): PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $data = Excel::toArray((object) [], request()->file('rate'));
        $rateSheet = $data[0];

        $headers = $rateSheet[0] ?? [];
        $requiredHeaders = ['country_code', 'weight', 'weight_unit', 'base_rate', 'markup_value', 'markup_type', 'markup', 'surcharges', 'rate', 'currency'];
        if (array_diff($requiredHeaders, $headers)) {
            $fail('Invalid file format. Required headers: ' . implode(', ', $requiredHeaders));
        }
    }
}
