<?php

namespace App\Http\Services;

use App\Models\Contact;
use Illuminate\Support\Facades\Session;


class ContactService{
    public function getAllContacts(){
        $dependentId = Session::get('selected_dependent_id');
        if (!$dependentId) {
            return []; 
        }

        return Contact::where('dependent_id', $dependentId)->orderBy('nom')->get();
    }

    public function createContact(array $data){
        $dependentId = Session::get('selected_dependent_id');
        if (!$dependentId) {
            return null; 
        }

        $data['dependent_id'] = $dependentId;

        return Contact::create($data);
    }

    public function updateContact(Contact $contact, array $data){
        $dependentId = Session::get('selected_dependent_id');
        if (!$dependentId) {
            return null; 
        }

        return $contact->update($data);
    }

    public function deleteContact(Contact $contact){
        $dependentId = Session::get('selected_dependent_id');

        if (!$dependentId || $contact->dependent_id !== $dependentId) {
            return null;
        }

        return $contact->delete();
    }
}