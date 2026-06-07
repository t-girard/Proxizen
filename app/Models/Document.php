<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'dependent_id',
        'document_id',
        'nom',
        'provenance',
        'adresse',
        'Date',
        'categorie',
    ];
}
