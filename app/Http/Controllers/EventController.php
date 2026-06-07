<?php

namespace App\Http\Controllers;

use App\Http\Services\EventService;
use App\Models\Event;
use App\Http\Requests\EventRequest;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;


class EventController extends Controller
{
    use AuthorizesRequests, ValidatesRequests;

    protected $eventService;

    public function __construct(EventService $eventService){
        $this->eventService = $eventService;
    }

    public function index(){
        $events = $this->eventService->getAllEvents();

        return Inertia::render('Events', [
        'events' => $events
]);
    }

    public function create(){
        return Inertia::render('Dashboard',[
            'showModal' => true,
            'modalType' => 'create'
        ]);
    }

    public function  store(EventRequest $request){
        $validated = $request->validated();
        $this->eventService->createEvent($validated);
        return Redirect::route('events.index')->with('success', 'Événement créé');
    }

    public function show(Event $event){
        $this->authorize('view', $event);
        return Inertia::render('SingleEvent',[
            'event' => $event
        ]);
    }

    public function edit(Event $event){
        $this->authorize('update', $event);
        return Inertia::render('Events', [
            'showModal' => true,
            'modalType' => 'edit',
            'event' => $event
        ]);
    }

    public function update(EventRequest $request, Event $event){
        $this->authorize('update', $event);
        $validated = $request->validated();
        $this->eventService->updateEvent($event, $validated);
        return Redirect::route('events.index')->with('succes', 'Événement modifié');
    }

    public function destroy(Event $event){
        $this->authorize('delete', $event);
        $this->eventService->deleteEvent($event);
        return Redirect::route('events.index')->with('succes', 'Événement supprimé');
    }

}
