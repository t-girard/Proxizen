<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class DocumentController extends Controller
{
    public function index()
    {
        $dependentId = session('selected_dependent_id');

        if (!$dependentId) {
            return redirect()->route('dependents.index'); 
        }

        return Inertia::render('documents', [
            'documents' => Document::where('dependent_id', $dependentId)->get()
        ]);
    }

    public function store(Request $request)
    {
        $dependentId = session('selected_dependent_id');

        if (!$dependentId) {
            return redirect()->back()->withErrors(['file' => 'Aucun profil sélectionné']);
        }

        $validated = $request->validate([
            'nom' => 'required|string|max:255',
            'categorie' => 'required|string',
            'provenance' => 'required|string',
            'file' => 'required|file|mimes:pdf,jpg,png|max:10240',
        ]);

        $path = $request->file('file')->store('documents', 'public', 'public');

        Document::create([
            'dependent_id' => $dependentId, 
            'nom' => $validated['nom'],
            'categorie' => $validated['categorie'],
            'provenance' => $validated['provenance'],
            'adresse' => $path,
            'Date' => now()->format('Y-m-d'),
        ]);

        return redirect()->back();
    }
}