<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('documents', function (Blueprint $table) {
            $table->bigInteger('dependent_id')->nullable();
        });

        $firstDependent = \App\Models\Dependent::first();

        if ($firstDependent) {
            \App\Models\Document::whereNull('dependent_id')
            ->update(['dependent_id' => $firstDependent->id]);
        }

        Schema::table('documents', function (Blueprint $table) {
            $table->bigInteger('dependent_id')->nullable(false)->change();
        });
    }

    public function down(): void
    {
        Schema::table('documents', function (Blueprint $table) {
            $table->dropColumn('dependent_id');
        });
    }
};
