<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;

Route::resource('api/blog',BlogController::class)->only(['index', 'store', 'update', 'show', 'destroy']); 

Route::get('{any}', function () {
    return view('app');
})->where('any', '.*');