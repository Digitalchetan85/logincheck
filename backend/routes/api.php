<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\CustomController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::get('getdata', [CustomController::class, 'getdata']);
Route::get('coachingdata', [CustomController::class, 'coachingdata']);
Route::get('mentoringdata', [CustomController::class, 'mentoringdata']);
Route::get('promotionalimages', [CustomController::class, 'promotionalimages']);
Route::get('promotionalimages/{id}', [CustomController::class, 'EditPromotionalImages']);
Route::post('add-promotional-image', [CustomController::class, 'AddPromotionalImages']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
