<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up(): void
    {
        Schema::create('documents', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('provenance');
            $table->string('adresse');
            $table->date('Date');
            $table->string('categorie');
            $table->timestamps();
        });
    }

   
    public function down(): void
    {
        Schema::dropIfExists('documents');
    }
};
