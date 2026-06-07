<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Models\Event;

class EventRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'titre' => ['required', 'string', 'max:150'],
            'type' => ['required', 'string',  Rule::in(['RDV', 'Aide','Medoc', 'Autre', ])],
            'date' => ['required', 'date'],
            'heureD' => ['required', 'date_format:H:i'],
            'heureF' => ['required', 'date_format:H:i',
                function ($attribute, $value, $fail) {
                    if (
                        request('heureD') &&
                        strtotime($value) < strtotime(request('heureD'))
                    ) {
                        $fail("L'heure de fin doit être postérieure à l'heure de début.");
                    }
                }],
            'description' => ['nullable', 'string'],
        ];
    }

    public function messages(): array
    {
        return [
            'titre.required' => 'Le titre est obligatoire.',
            'type.in' => 'Le type doit être Rendez-vous médical, Aide à domicile, Médicament ou Autre. ',
            'date.required' => 'La date est obligatoire.',
            'heureD.required' => "L'heure de début est obligatoire.",
            'heurD.date_format' => "Le format de l'heure doit être HH:MM.",
            'heureF.required' => "L'heure de fin est obligatoire.",
            'heureF.date_format' => "Le format de l'heure doit être HH:MM.",
        ];
    }

}
