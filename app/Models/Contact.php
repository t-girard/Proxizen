<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'dependent_id',
        'prenom',
        'nom',
        'profession',
        'categorie',
        'phone',
        'email',
        'adresse',
    ];

    public function dependent(){
        return $this->belongsTo(Dependent::class);
    }

}
