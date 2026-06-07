<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'dependent_id',
        'titre',
        'type',
        'date',
        'heureD',
        'heureF',
        'description',
    ];

    protected $casts = [       
        'heure_debut' => 'datetime:H:i', 
        'heure_fin' => 'datetime:H:i',
    ];

    public function dependent(){
        return $this->belongsTo(Dependent::class);
    }
}
