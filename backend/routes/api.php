<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\CustomController;
use App\Http\Controllers\EmailContoller;
use App\Http\Controllers\PaymentContoller;
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
Route::get('promotional-images', [CustomController::class, 'promotionalimages']);
Route::get('home-slider', [CustomController::class, 'HomeSlider']);
Route::get('mentoring-slider', [CustomController::class, 'MentoringSlider']);
Route::get('coaching-slider', [CustomController::class, 'CoachingSlider']);
Route::get('course-schedule', [CustomController::class, 'CourseSchedule']);
Route::get('course-schedule-by-coursename/{name}', [CustomController::class, 'GetCourseSchedule']);
Route::get('payment', [PaymentContoller::class, 'Payment']);
Route::post('payment', [PaymentContoller::class, 'PaymentCreate']);
Route::post('email', [EmailContoller::class, 'Email']);
Route::post('payment-email', [EmailContoller::class, 'PaymantEmail']);


Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('promotionalimages/{id}', [CustomController::class, 'EditPromotionalImages']);
    Route::post('add-promotional-image', [CustomController::class, 'AddPromotionalImages']);
    Route::post('update-promotional-image', [CustomController::class, 'UpdatePromotionalImages']);
    Route::post('delete-promotional-image', [CustomController::class, 'DeletePromotionalImages']);

    Route::get('home-slider-images/{id}', [CustomController::class, 'EditHomeSlider']);
    Route::post('add-homeslider-image', [CustomController::class, 'AddHomeSlider']);
    Route::post('update-homeslider-image', [CustomController::class, 'UpdateHomeSlider']);
    Route::post('delete-homeslider-image', [CustomController::class, 'DeleteHomeSlider']);

    Route::get('popupimages', [CustomController::class, 'PopSlider']);
    Route::get('popupimages/{id}', [CustomController::class, 'EditPopSlider']);
    Route::post('add-popup-image', [CustomController::class, 'AddPopSlider']);
    Route::post('update-popup-image', [CustomController::class, 'UpdatePopSlider']);
    Route::post('delete-popup-image', [CustomController::class, 'DeletePopSlider']);

    Route::get('mentoring-slider/{id}', [CustomController::class, 'EditMentoringSlider']);
    Route::post('add-mentoring-slider-image', [CustomController::class, 'AddMentoringSlider']);
    Route::post('update-mentoring-slider-image', [CustomController::class, 'UpdateMentoringSlider']);
    Route::post('delete-mentoring-slider-image', [CustomController::class, 'DeleteMentoringSlider']);

    Route::get('coaching-slider/{id}', [CustomController::class, 'EditCoachingSlider']);
    Route::post('add-coaching-slider-image', [CustomController::class, 'AddCoachingSlider']);
    Route::post('update-coaching-slider-image', [CustomController::class, 'UpdateCoachingSlider']);
    Route::post('delete-coaching-slider-image', [CustomController::class, 'DeleteCoachingSlider']);

    Route::get('course-schedule/{id}', [CustomController::class, 'EditCourseSchedule']);
    Route::post('add-course-schedule', [CustomController::class, 'AddCourseSchedule']);
    Route::post('update-course-schedule', [CustomController::class, 'UpdateCourseSchedule']);
    Route::post('delete-course-schedule', [CustomController::class, 'DeleteCourseSchedule']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
