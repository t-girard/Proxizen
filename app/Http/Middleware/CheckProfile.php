<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckProfile
{
    public function handle(Request $request, Closure $next)
    {
        if (!session('selected_dependent_id')) {
            return redirect()->route('profils');
        }

        return $next($request);
    }
}
