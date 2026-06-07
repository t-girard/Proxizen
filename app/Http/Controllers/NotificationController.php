<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use App\Models\NotificationSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        
        if (!$user) {
            return response()->json(['error' => 'Non authentifié'], 401);
        }

        $notifications = $user->notifications()
            ->active()
            ->orderBy('trigger_at', 'desc')
            ->get();

        return response()->json($notifications);
    }

    public function unread()
    {
        $user = Auth::user();
        
        if (!$user) {
            return response()->json(['error' => 'Non authentifié'], 401);
        }

        $notifications = $user->notifications()
            ->active()
            ->unread()
            ->orderBy('trigger_at', 'desc')
            ->get();

        return response()->json([
            'notifications' => $notifications,
            'count' => $notifications->count()
        ]);
    }

    public function upcoming()
    {
        $user = Auth::user();
        
        if (!$user) {
            return response()->json(['error' => 'Non authentifié'], 401);
        }

        $notifications = $user->notifications()
            ->active()
            ->upcoming()
            ->orderBy('trigger_at', 'asc')
            ->get();

        return response()->json($notifications);
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        
        if (!$user) {
            return response()->json(['error' => 'Non authentifié'], 401);
        }

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'type' => 'required|in:medical,medication,call,document,urgent,info,other',
            'priority' => 'required|in:low,normal,high',
            'trigger_at' => 'required|date',
            'end_at' => 'nullable|date|after:trigger_at',
        ]);

        $notification = $user->notifications()->create($validated);

        return response()->json($notification, 201);
    }

    public function update(Request $request, Notification $notification)
    {
        $user = Auth::user();
        
        if (!$user) {
            return response()->json(['error' => 'Non authentifié'], 401);
        }

        if ($notification->user_id !== $user->id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'type' => 'sometimes|required|in:medical,medication,call,document,urgent,info,other',
            'priority' => 'sometimes|required|in:low,normal,high',
            'trigger_at' => 'sometimes|required|date',
            'end_at' => 'nullable|date|after:trigger_at',
        ]);

        $notification->update($validated);

        return response()->json($notification);
    }

    public function markAsRead(Notification $notification)
    {
        $user = Auth::user();
        
        if (!$user) {
            return response()->json(['error' => 'Non authentifié'], 401);
        }

        if ($notification->user_id !== $user->id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $notification->update(['is_read' => true]);

        return response()->json($notification);
    }

    public function markAsUnread(Notification $notification)
    {
        $user = Auth::user();
        
        if (!$user) {
            return response()->json(['error' => 'Non authentifié'], 401);
        }

        if ($notification->user_id !== $user->id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $notification->update(['is_read' => false]);

        return response()->json($notification);
    }

    public function destroy(Notification $notification)
    {
        $user = Auth::user();
        
        if (!$user) {
            return response()->json(['error' => 'Non authentifié'], 401);
        }

        if ($notification->user_id !== $user->id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $notification->update(['is_deleted' => true]);

        return response()->json(['message' => 'Notification supprimée']);
    }

    public function history()
    {
        $user = Auth::user();
        
        if (!$user) {
            return response()->json(['error' => 'Non authentifié'], 401);
        }

        $notifications = $user->notifications()
            ->where('is_deleted', true)
            ->orderBy('trigger_at', 'desc')
            ->get();

        return response()->json($notifications);
    }

    public function checkPending()
    {
        $user = Auth::user();
        
        if (!$user) {
            return response()->json(['error' => 'Non authentifié'], 401);
        }

        $settings = $user->notificationSetting;
        
        if (!$settings) {
            $settings = NotificationSetting::create(['user_id' => $user->id]);
        }

        $notifications = $user->notifications()
            ->active()
            ->pending()
            ->get()
            ->filter(function ($notification) use ($settings) {
                return $settings->isTypeEnabled($notification->type);
            });

        foreach ($notifications as $notification) {
            $notification->update(['is_triggered' => true]);
        }

        return response()->json($notifications);
    }

    public function getSettings()
    {
        $user = Auth::user();
        
        if (!$user) {
            return response()->json(['error' => 'Non authentifié'], 401);
        }

        $settings = $user->notificationSetting;
        
        if (!$settings) {
            $settings = NotificationSetting::create(['user_id' => $user->id]);
        }

        return response()->json($settings);
    }

    public function updateSettings(Request $request)
    {
        $user = Auth::user();
        
        if (!$user) {
            return response()->json(['error' => 'Non authentifié'], 401);
        }

        $validated = $request->validate([
            'push_enabled' => 'sometimes|boolean',
            'sound_enabled' => 'sometimes|boolean',
            'medical_enabled' => 'sometimes|boolean',
            'medication_enabled' => 'sometimes|boolean',
            'call_enabled' => 'sometimes|boolean',
            'document_enabled' => 'sometimes|boolean',
            'urgent_enabled' => 'sometimes|boolean',
            'info_enabled' => 'sometimes|boolean',
            'other_enabled' => 'sometimes|boolean',
        ]);

        $settings = $user->notificationSetting;
        
        if (!$settings) {
            $settings = NotificationSetting::create([
                'user_id' => $user->id,
                ...$validated
            ]);
        } else {
            $settings->update($validated);
        }

        return response()->json($settings);
    }
}
