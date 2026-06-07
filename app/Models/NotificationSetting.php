<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class NotificationSetting extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'push_enabled',
        'sound_enabled',
        'medical_enabled',
        'medication_enabled',
        'call_enabled',
        'document_enabled',
        'urgent_enabled',
        'info_enabled',
        'other_enabled',
    ];

    protected $casts = [
        'push_enabled' => 'boolean',
        'sound_enabled' => 'boolean',
        'medical_enabled' => 'boolean',
        'medication_enabled' => 'boolean',
        'call_enabled' => 'boolean',
        'document_enabled' => 'boolean',
        'urgent_enabled' => 'boolean',
        'info_enabled' => 'boolean',
        'other_enabled' => 'boolean',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    // il vérifie si un type de notification est on ou pas
    public function isTypeEnabled(string $type): bool
    {
        $field = $type . '_enabled';
        return $this->$field ?? true;
    }
}
