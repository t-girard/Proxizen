<?php

namespace App\Http\Services;

use App\Models\Event;
use Illuminate\Support\Facades\Session;


class EventService{
    public function getAllEvents(){
        $dependentId = Session::get('selected_dependent_id');
        if (!$dependentId) {
            return []; 
        }

        return Event::where('dependent_id', $dependentId)->orderBy('date')->orderBy('heureD')->get();
    }

    public function createEvent(array $data){
        $dependentId = Session::get('selected_dependent_id');
        if (!$dependentId) {
            return null; 
        }

        $data['dependent_id'] = $dependentId;

        return Event::create($data);
    }

    public function updateEvent(Event $event, array $data){
        $dependentId = Session::get('selected_dependent_id');
        if (!$dependentId) {
            return null; 
        }

        return $event->update($data);
    }

    public function deleteEvent(Event $event){
        $dependentId = Session::get('selected_dependent_id');
        if (!$dependentId || $event->dependent_id !== $dependentId) {
            return null;
        }

        return $event->delete();
    }
}