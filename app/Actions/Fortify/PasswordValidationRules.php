<?php

namespace App\Actions\Fortify;

use Illuminate\Validation\Rules\Password;

trait PasswordValidationRules
{
    /**
     * Get the validation rules used to validate passwords.
     *
     * @return array<int, 
     */
    protected function passwordRules(): array
    {
        return ['required', Password::min(12) ->mixedCase() ->numbers(), 'confirmed'];
    }
}
