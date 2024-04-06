<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;

Route::get('{any}', function () {
    return view('app');
})->where('any', '.*');

Route::resource('blog',BlogController::class)->only(['index', 'store', 'update', 'show', 'destroy']); 
