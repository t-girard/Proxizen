<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up(): void
    {
        Schema::create('events', function(Blueprint $table)
        {
            $table->id();
            $table->string('titre');
            $table->string('type');
            $table->date('date');
            $table->time('heureD');
            $table->time('heureF');
            $table->string('description')->nullable();
            $table->foreignId('dependent_id')->constrained()->onDelete('cascade');
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
