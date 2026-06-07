<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('title');
            $table->text('description')->nullable();
            $table->enum('type', ['medical', 'medication', 'call', 'document', 'urgent', 'info', 'other'])->default('info');
            $table->enum('priority', ['low', 'normal', 'high'])->default('normal');
            $table->dateTime('trigger_at'); 
            $table->dateTime('end_at')->nullable(); 
            $table->boolean('is_read')->default(false);
            $table->boolean('is_triggered')->default(false); 
            $table->boolean('is_deleted')->default(false); 
            $table->timestamps();
            
            $table->index(['user_id', 'is_triggered', 'trigger_at']);
            $table->index(['user_id', 'is_deleted']);
        });

        Schema::create('notification_settings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->unique()->constrained()->onDelete('cascade');
            $table->boolean('push_enabled')->default(true);
            $table->boolean('sound_enabled')->default(true);
            $table->boolean('medical_enabled')->default(true);
            $table->boolean('medication_enabled')->default(true);
            $table->boolean('call_enabled')->default(true);
            $table->boolean('document_enabled')->default(true);
            $table->boolean('urgent_enabled')->default(true);
            $table->boolean('info_enabled')->default(true);
            $table->boolean('other_enabled')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('notification_settings');
        Schema::dropIfExists('notifications');
    }
};
