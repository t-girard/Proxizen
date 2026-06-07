<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Http\Controllers\NotificationController;
use Illuminate\Support\Facades\Log;

Route::post('/reset-password', function (Request $request) {
    Log::info('API reset-password appelée', $request->all());
    
    $request->validate([
        'email' => 'required|email',
        'password' => 'required|min:8'
    ]);
    
    $user = User::where('email', $request->email)->first();
    
    if (!$user) {
        return response()->json(['message' => 'Utilisateur non trouvé'], 404)
            ->header('Access-Control-Allow-Origin', '*');
    }
    
    $user->password = Hash::make($request->password);
    $user->save();
    
    return response()->json(['message' => 'Mot de passe réinitialisé'], 200)
        ->header('Access-Control-Allow-Origin', '*');
});

Route::options('/reset-password', function () {
    return response('', 200)
        ->header('Access-Control-Allow-Origin', '*')
        ->header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        ->header('Access-Control-Allow-Headers', 'Content-Type');
});
Route::middleware(['web', 'auth'])->group(function () {
    Route::get('/notifications', [NotificationController::class, 'index']);
    Route::get('/notifications/unread', [NotificationController::class, 'unread']);
    Route::get('/notifications/upcoming', [NotificationController::class, 'upcoming']);
    Route::get('/notifications/history', [NotificationController::class, 'history']);
    Route::get('/notifications/check-pending', [NotificationController::class, 'checkPending']);
    
    Route::post('/notifications', [NotificationController::class, 'store']);
    Route::put('/notifications/{notification}', [NotificationController::class, 'update']);
    Route::delete('/notifications/{notification}', [NotificationController::class, 'destroy']);
    
    Route::post('/notifications/{notification}/mark-read', [NotificationController::class, 'markAsRead']);
    Route::post('/notifications/{notification}/mark-unread', [NotificationController::class, 'markAsUnread']);
    
    Route::get('/notifications/settings', [NotificationController::class, 'getSettings']);
    Route::put('/notifications/settings', [NotificationController::class, 'updateSettings']);
});