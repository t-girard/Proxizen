<?php

namespace App\Policies;

use Illuminate\Auth\Access\Response;
use App\Models\Event;
use App\Models\User;

class EventPolicy
{
    
    public function viewAny(User $user): bool
    {
        return session()->has('selected_dependent_id');
    }

   
    public function view(User $user, Event $event): bool
    {
        $dependentId = session('selected_dependent_id');
        return $dependentId && $event->dependent_id === $dependentId;
    }

   
    public function create(User $user): bool
    {
        return session()->has('selected_dependent_id');
    }

   
    public function update(User $user, Event $event): bool
    {
        $dependentId = session('selected_dependent_id');
        return $dependentId && $event->dependent_id === $dependentId;
    }

    
    public function delete(User $user, Event $event): bool
    {
        $dependentId = session('selected_dependent_id');
        return $dependentId && $event->dependent_id === $dependentId;
    }

    
    public function restore(User $user, Event $event): bool
    {
        return false;
    }

    
    public function forceDelete(User $user, Event $event): bool
    {
        return false;
    }
}