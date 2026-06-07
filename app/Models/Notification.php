<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Notification extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'description',
        'type',
        'priority',
        'trigger_at',
        'end_at',
        'is_read',
        'is_triggered',
        'is_deleted',
    ];

    protected $casts = [
        'trigger_at' => 'datetime',
        'end_at' => 'datetime',
        'is_read' => 'boolean',
        'is_triggered' => 'boolean',
        'is_deleted' => 'boolean',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function scopeActive($query)
    {
        return $query->where('is_deleted', false);
    }

    public function scopeUnread($query)
    {
        return $query->where('is_read', false);
    }

    public function scopePending($query)
    {
        return $query->where('is_triggered', false)
                     ->where('trigger_at', '<=', now());
    }

    public function scopeUpcoming($query)
    {
        return $query->where('is_triggered', false)
                     ->where('trigger_at', '>', now());
    }
}
