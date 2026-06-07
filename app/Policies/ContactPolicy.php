<?php

namespace App\Policies;

use Illuminate\Auth\Access\Response;
use App\Models\Contact;
use App\Models\User;

class ContactPolicy
{
   
    public function viewAny(User $user): bool
    {
        return session()->has('selected_dependent_id');
    }

   
    public function view(User $user, Contact $contact): bool
    {
        $dependentId = session('selected_dependent_id');
        return $dependentId && $contact->dependent_id === $dependentId;
    }

    
    public function create(User $user): bool
    {
        return session()->has('selected_dependent_id');
    }

    
    public function update(User $user, Contact $contact): bool
    {
        $dependentId = session('selected_dependent_id');
        return $dependentId && $contact->dependent_id === $dependentId;
    }

    
    public function delete(User $user, Contact $contact): bool
    {
        $dependentId = session('selected_dependent_id');
        return $dependentId && $contact->dependent_id === $dependentId;
    }

    
    public function restore(User $user, Contact $contact): bool
    {
        return false;
    }

   
    public function forceDelete(User $user, Contact $contact): bool
    {
        return false;
    }
}
