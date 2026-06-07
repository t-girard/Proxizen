<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up(): void
    {
        Schema::create('contacts', function(Blueprint $table)
        {
            $table->id();
            $table->string('prenom');
            $table->string('nom');
            $table->string('profession');
            $table->string('categorie');
            $table->string('phone');
            $table->unique(['dependent_id', 'phone']);
            $table->string('email')->nullable();
            $table->unique(['dependent_id', 'email']);
            $table->string('adresse')->nullable();
            $table->foreignId('dependent_id')->constrained()->onDelete('cascade');
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('contacts');
    }
};
