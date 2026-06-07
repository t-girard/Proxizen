<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Dependent;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class DependentController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        $dependents = $user->dependents()
            ->select('dependents.id', 'name', 'age', 'color')
            ->withPivot('role')
            ->get()
            ->map(function ($dependent) {
                return [
                    'id' => $dependent->id,
                    'name' => $dependent->name,
                    'age' => $dependent->age,
                    'initials' => substr(
                        collect(explode(' ', $dependent->name))
                            ->map(fn ($w) => strtoupper(substr($w, 0, 1)))
                            ->join(''),
                        0,
                        2
                    ),
                    'color' => $dependent->color,
                    'role' => $dependent->pivot->role,
                ];
            });

        return Inertia::render('Profils', [
            'profiles' => $dependents,
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'age' => 'required|integer|min:0|max:120',
            'color' => 'required|string',
        ]);

        $data['join_code'] = strtoupper(Str::random(6));

        $dependant = Dependent::create($data);

        $request->user()->dependents()->attach($dependant->id, [
            'role' => 'primary',
        ]);

        return redirect()->route('profils');
    }

    public function destroy(Request $request, Dependent $dependent)
    {
        $user = $request->user();
        
        // Vérifie le rôle
        $link = $dependent->users()->where('user_id', $user->id)->first();
        $role = $link->pivot->role;

        if ($role === 'primary') {
            // Supprime le dependent et tous les liens (cascade)
            $dependent->delete();
        } else {
            // Supprime juste le lien aidant-secondaire / dependent
            $user->dependents()->detach($dependent->id);
        }

        return redirect()->route('profils');
    }

    public function select(Request $request, Dependent $dependent)
    {
        $user = $request->user();

        // Sécurité : vérifier que l’utilisateur est lié à ce dependent
        if (! $user->dependents()->where('dependent_id', $dependent->id)->exists()) {
            abort(403);
        }

        session()->put('selected_dependent_id', $dependent->id);

        return redirect()->route('home');
    }

    public function join(Request $request)
    {
        $request->validate([
            'join_code' => ['required', 'string'],
        ]);

        $dependent = Dependent::where('join_code', $request->join_code)->first();

        if (! $dependent) {
            return back()->withErrors([
                'join_code' => 'Code invalide',
            ]);
        }

        // éviter doublon
        if ($dependent->users()->where('user_id', auth()->id())->exists()) {
            return back()->withErrors([
                'join_code' => 'Vous êtes déjà lié à ce profil',
            ]);
        }

        $dependent->users()->attach(auth()->id(), [
            'role' => 'secondary',
        ]);

        return redirect('/profils');
    }

    public function update(Request $request, Dependent $dependent)
    {
        $user = Auth::user();

        // Vérifier que l'utilisateur est lié à ce dependent
        $relation = $dependent->users()
            ->where('user_id', $user->id)
            ->first();

        if (! $relation) {
            abort(403, 'Accès non autorisé.');
        }

        // Vérifier le rôle
        if ($relation->pivot->role !== 'primary') {
            abort(403, 'Seul l’aidant principal peut modifier ce profil.');
        }

        // Validation
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'age'  => ['required', 'integer', 'min:0', 'max:120'],
        ]);

        // Mise à jour
        $dependent->update([
            'name' => $validated['name'],
            'age'  => $validated['age'],
        ]);

        return redirect()->back()->with('success', 'Profil mis à jour avec succès.');
    }
}