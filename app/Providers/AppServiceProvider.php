<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use App\Models\Dependent;

class AppServiceProvider extends ServiceProvider
{
    
    public function register(): void
    {
        $this->app->singleton(ContactService::class);
        $this->app->singleton(EventService::class);
    }

    
    public function boot(): void
    {
        //
        Inertia::share([
            'auth' => fn () => [
                'user' => auth()->user(),
            ],

            'selectedDependent' => function () {
                $user = auth()->user();
                $dependentId = session('selected_dependent_id');

                if (! $user || ! $dependentId) {
                    return null;
                }

                $dependent = Dependent::find($dependentId);

                if (! $dependent) {
                    return null;
                }

                return [
                    'id' => $dependent->id,
                    'name' => $dependent->name,
                    'role' => $dependent->roleForUser($user), // ✅ OK
                ];
            },
        ]);
    }
}
