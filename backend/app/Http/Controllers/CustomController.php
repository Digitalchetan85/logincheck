<?php

namespace App\Http\Controllers;

use App\Models\CoachingSlider;
use App\Models\Customslider;
use App\Models\MentoringSlider;
use Illuminate\Http\Request;

class CustomController extends Controller
{
    public function getdata()
    {
        $data = Customslider::all();
        return response()->json([
            'success' => 200,
            'data' => $data
        ]);
    }

    public function coachingdata()
    {
        $data = MentoringSlider::all();
        return response()->json([
            'success' => 200,
            'data' => $data
        ]);
    }

    public function mentoringdata()
    {
        $data = CoachingSlider::all();
        return response()->json([
            'success' => 200,
            'data' => $data
        ]);
    }
}
