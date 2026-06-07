<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Models\Contact;

class ContactRequest extends FormRequest
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

        $dependentId = session('selected_dependent_id');

        return [
            'prenom' => 'required|string|max:100',
            'nom' => 'required|string|max:100',
            'profession' => 'required|string|max:100',
            'categorie' => ['required', 'string',  Rule::in(['Famille', 'Medical',"Aide", 'Autre', ])],
            'phone' => ['required', 'string', 'regex:/^[0-9\s\-]{6,20}$/',
                function ($attribute, $value, $fail) {
                    if (strlen($value) !== 14) {
                        $fail('Le numéro de téléphone doit contenir exactement 10 chiffres.');
                    }},
            Rule::unique('contacts', 'phone')->where(function ($query) use ($dependentId) {
                return $query->where('dependent_id', $dependentId);
            })->ignore($this->contact),],
            'email' => ['nullable', 'string', 'email', 'max:150',
                Rule::unique('contacts', 'email')->where(function ($query) use ($dependentId) {
                    return $query->where('dependent_id', $dependentId);
                })->ignore($this->contact),],
            'adresse' => 'nullable|string|max:255',
        ];
    }

    public function messages(): array
    {
        return [
            'prenom.required' => 'Le prénom est obligatoire.',
            'nom.required' => 'Le nom est obligatoire.',
            'profession.required' => 'La profession est obligatoire.',
            'categorie.required' => 'La catégorie est obligatoire.',
            'categorie.in' => 'La catégorie doit être Famille, Professionnel de santé, Aide à domicile ou Autre.',
            'phone.required' => 'Le numéro de téléphone est obligatoire.',
            'phone.regex' => 'Le numéro de téléphone est invalide.',
            'phone.unique' => 'Ce numéro de téléphone est déjà utilisé.',
            'email.email' => 'L\'email n\'est pas valide.',
            'email.unique' => 'Cet email est déjà utilisé.',
        ];
    }
}
