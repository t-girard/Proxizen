<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   
    public function up(): void
    {
        Schema::create('dependent_user', function (Blueprint $table) {
            $table->id();

            $table->foreignId('dependent_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->foreignId('user_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->enum('role', ['primary', 'secondary']);

            $table->timestamps();

            $table->unique(['dependent_id', 'user_id']);
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('dependent_user');
    }
};
