<?php

namespace App\Http\Controllers;

use App\Http\Services\EventService;
use App\Models\Event;
use App\Http\Requests\EventRequest;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;

class HomeController extends Controller
{
    use AuthorizesRequests, ValidatesRequests;

    protected $eventService;

    public function __construct(EventService $eventService){
        $this->eventService = $eventService;
    }

    public function index(){
        $events = $this->eventService->getAllEvents();

        return Inertia::render('Home', [
        'events' => $events ]);
    }
}
