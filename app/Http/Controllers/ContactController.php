<?php

namespace App\Http\Controllers;

use App\Http\Services\ContactService;
use App\Models\Contact;
use App\Http\Requests\ContactRequest;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;


class ContactController extends Controller
{
    use AuthorizesRequests, ValidatesRequests;

    protected $contactService;

    public function __construct(ContactService $contactService){
        $this->contactService = $contactService;
    }

    public function index(){
        $contacts = $this->contactService->getAllContacts();

        return Inertia::render('Contacts', [
        'contacts' => $contacts
]);
    }

    public function create(){
        return Inertia::render('Dashboard',[
            'showModal' => true,
            'modalType' => 'create'
        ]);
    }

    public function store(ContactRequest $request){
        $validated = $request->validated();
        $this->contactService->createContact($validated);
        return Redirect::route('contacts.index')->with('success', 'Contact créé');
    }

    public function show(Contact $contact){
        $this->authorize('view', $contact);
        return Inertia::render('SingleContact',[
            'contact' => $contact
        ]);
    }

    public function edit(Contact $contact){
        $this->authorize('update', $contact);
        return Inertia::render('Contacts', [
            'showModal' => true,
            'modalType' => 'edit',
            'contact' => $contact
        ]);
    }

    public function update(ContactRequest $request, Contact $contact){
        $this->authorize('update', $contact);
        $validated = $request->validated();
        $this->contactService->updateContact($contact, $validated);
        return Redirect::route('contacts.index')->with('succes', 'Contact modifié');
    }

    public function destroy(Contact $contact){
        $this->authorize('delete', $contact);
        $this->contactService->deleteContact($contact);
        return Redirect::route('contacts.index')->with('succes', 'Contact supprimé');
    }

}
