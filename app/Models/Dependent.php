<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use App\Models\User;

class Dependent extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'age',
        'color',
        'join_code',
    ];

  
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class)
            ->withPivot('role')
            ->withTimestamps();
    }

   
    public function primaryUser()
    {
        return $this->users()->wherePivot('role', 'primary');
    }

 
    public function secondaryUsers()
    {
        return $this->users()->wherePivot('role', 'secondary');
    }

    public function contacts()
    {
        return $this->hasMany(Contacs::class);
    }

    public function events()
    {
        return $this->hasMany(Event::class);
    }

    public function roleForUser(User $user): string
    {
        $relation = $this->users()->where('user_id', $user->id)->first();
        return $relation ? $relation->pivot->role : 'secondary';
    }
}
