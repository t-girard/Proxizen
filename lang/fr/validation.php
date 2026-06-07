<?php

return [

    'accepted' => 'Le champ :attribute doit être accepté.',
    'accepted_if' => 'Le champ :attribute doit être accepté lorsque :other est :value.',
    'active_url' => 'Le champ :attribute n’est pas une URL valide.',
    'after' => 'Le champ :attribute doit être une date postérieure au :date.',
    'after_or_equal' => 'Le champ :attribute doit être une date postérieure ou égale au :date.',
    'alpha' => 'Le champ :attribute ne doit contenir que des lettres.',
    'alpha_dash' => 'Le champ :attribute ne doit contenir que des lettres, chiffres, tirets et underscores.',
    'alpha_num' => 'Le champ :attribute ne doit contenir que des lettres et des chiffres.',
    'array' => 'Le champ :attribute doit être un tableau.',
    'before' => 'Le champ :attribute doit être une date antérieure au :date.',
    'before_or_equal' => 'Le champ :attribute doit être une date antérieure ou égale au :date.',

    'between' => [
        'numeric' => 'Le champ :attribute doit être compris entre :min et :max.',
        'file' => 'Le fichier :attribute doit avoir une taille entre :min et :max kilo-octets.',
        'string' => 'Le champ :attribute doit contenir entre :min et :max caractères.',
        'array' => 'Le champ :attribute doit contenir entre :min et :max éléments.',
    ],

    'boolean' => 'Le champ :attribute doit être vrai ou faux.',
    'confirmed' => 'La confirmation du champ :attribute ne correspond pas.',
    'current_password' => 'Le mot de passe est incorrect.',
    'date' => 'Le champ :attribute n’est pas une date valide.',
    'email' => 'Le champ :attribute doit être une adresse email valide.',
    'exists' => 'Le champ :attribute sélectionné est invalide.',
    'filled' => 'Le champ :attribute doit avoir une valeur.',
    'integer' => 'Le champ :attribute doit être un entier.',
    'max' => [
        'numeric' => 'Le champ :attribute ne doit pas être supérieur à :max.',
        'file' => 'Le fichier :attribute ne doit pas dépasser :max kilo-octets.',
        'string' => 'Le champ :attribute ne doit pas dépasser :max caractères.',
        'array' => 'Le champ :attribute ne doit pas contenir plus de :max éléments.',
    ],
    'min' => [
        'numeric' => 'Le champ :attribute doit être au moins de :min.',
        'file' => 'Le fichier :attribute doit faire au moins :min kilo-octets.',
        'string' => 'Le champ :attribute doit contenir au moins :min caractères.',
        'array' => 'Le champ :attribute doit contenir au moins :min éléments.',
    ],

    'required' => 'Le champ :attribute est obligatoire.',
    'same' => 'Le champ :attribute doit correspondre au champ :other.',
    'string' => 'Le champ :attribute doit être une chaîne de caractères.',
    'unique' => 'Le champ :attribute est déjà utilisé.',

    /*
    |--------------------------------------------------------------------------
    | Password
    |--------------------------------------------------------------------------
    */

    'password' => [
        'letters' => 'Le mot de passe doit contenir au moins une lettre.',
        'mixed' => 'Le mot de passe doit contenir au moins une majuscule et une minuscule.',
        'numbers' => 'Le mot de passe doit contenir au moins un chiffre.',
        'symbols' => 'Le mot de passe doit contenir au moins un symbole.',
        'uncompromised' => 'Ce mot de passe est apparu dans une fuite de données. Veuillez en choisir un autre.',
    ],

    /*
    |--------------------------------------------------------------------------
    | Attributes
    |--------------------------------------------------------------------------
    */

    'attributes' => [
        'email' => 'adresse email',
        'password' => 'mot de passe',
        'password_confirmation' => 'confirmation du mot de passe',
        'name' => 'nom',
    ],

];
