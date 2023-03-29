<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BookController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::get('/books', 'App\Http\Controllers\BookController@index');

Route::controller(App\Http\Controllers\BookController::class)->group(function (){
    Route::get('/books', 'index');
    Route::post('/book', 'store');
    Route::get('/books/search', 'search');
 
});
