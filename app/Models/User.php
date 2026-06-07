<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Dependent;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use App\Models\Notification;
use App\Models\NotificationSetting;

class User extends Authenticatable implements MustVerifyEmail
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'two_factor_secret',
        'two_factor_recovery_codes',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'two_factor_confirmed_at' => 'datetime',
        ];
    }

   
    public function dependents(): BelongsToMany
    {
        return $this->belongsToMany(Dependent::class)
            ->withPivot('role')
            ->withTimestamps();
    }

    
    public function primaryDependents()
    {
        return $this->dependents()->wherePivot('role', 'primary');
    }

   
    public function secondaryDependents()
    {
        return $this->dependents()->wherePivot('role', 'secondary');
    }

   
    public function notifications()
    {
        return $this->hasMany(Notification::class);
    }

  
    public function notificationSetting()
    {
        return $this->hasOne(NotificationSetting::class);
    }
}