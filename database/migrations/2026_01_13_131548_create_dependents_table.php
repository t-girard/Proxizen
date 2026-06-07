<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up(): void
    {
        Schema::create('dependents', function (Blueprint $table) {
            $table->id();

            $table->string('name');
            $table->unsignedTinyInteger('age');

            $table->string('color')->nullable();

            $table->string('join_code')->unique();

            $table->timestamps();
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('dependents');
    }
};
