<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\DependentController;
use App\Http\Controllers\NotificationController;

Route::middleware(['auth'])->group(function () {

    Route::get('/', [DependentController::class, 'index'])->name('profils');
    Route::get('/dashboard', [DependentController::class, 'index']);
    Route::get('/profils', [DependentController::class, 'index']);
    
    Route::post('/dependants', [DependentController::class, 'store'])->name('dependants.store');
    Route::delete('/dependents/{dependent}', [DependentController::class, 'destroy'])->name('dependants.destroy');
    Route::post('/dependents/{dependent}/select', [DependentController::class, 'select'])->name('dependents.select');
    Route::post('/dependents/join', [DependentController::class, 'join']);
    Route::put('/dependents/{dependent}', [DependentController::class, 'update']);


    Route::middleware('check.profile')->group(function () {
        Route::get('/home', [HomeController::class, 'index'])->name('home');

        Route::get('/calendrier', function () {
            return Inertia::render('Events');
        })->name('calendrier');

        Route::resource('/contacts', ContactController::class);

        Route::get('/documents', [DocumentController::class, 'index'])->name('documents.index');
        Route::post('/documents', [DocumentController::class, 'store'])->name('documents.store');
        Route::delete('/documents/{document}', [DocumentController::class, 'destroy'])->name('documents.destroy');

        Route::resource('events', EventController::class);

        Route::get('/notifications', function () {
            return Inertia::render('Notifications');
        })->name('notifications');
    });

    Route::post('/logout', function () {
        Auth::logout();
        request()->session()->invalidate();
        request()->session()->regenerateToken();
        return redirect('/login');
    })->name('logout');

});


Route::middleware('guest')->group(function () {
    Route::get('/login', fn() => Inertia::render('auth/login'))->name('login');
    Route::get('/register', fn() => Inertia::render('auth/register'))->name('register');
    Route::get('/forgot-password', fn() => Inertia::render('auth/forgot-password'))->name('forgot-password');
    Route::get('/reset-password', fn() => Inertia::render('auth/reset-password'))->name('password.reset');
});

Route::middleware('auth')->prefix('notifications/api')->group(function () {
    Route::get('/', [NotificationController::class, 'index']);
    Route::get('/unread', [NotificationController::class, 'unread']);
    Route::get('/upcoming', [NotificationController::class, 'upcoming']);
    Route::get('/history', [NotificationController::class, 'history']);
    Route::get('/check-pending', [NotificationController::class, 'checkPending']);
    
    Route::post('/', [NotificationController::class, 'store']);
    Route::put('/{notification}', [NotificationController::class, 'update']);
    Route::delete('/{notification}', [NotificationController::class, 'destroy']);
    
    Route::post('/{notification}/mark-read', [NotificationController::class, 'markAsRead']);
    Route::post('/{notification}/mark-unread', [NotificationController::class, 'markAsUnread']);
    
    Route::get('/settings', [NotificationController::class, 'getSettings']);
    Route::put('/settings', [NotificationController::class, 'updateSettings']);
});



require __DIR__ . '/settings.php';
