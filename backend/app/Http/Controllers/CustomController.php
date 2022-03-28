<?php

namespace App\Http\Controllers;

use App\Models\CoachingSlider;
use App\Models\CustomSlider;
use App\Models\MentoringSlider;
use App\Models\PromotionSlider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CustomController extends Controller
{
    public function getdata()
    {
        $data = CustomSlider::all();
        return response()->json([
            'success' => 200,
            'data' => $data
        ]);
    }

    public function coachingdata()
    {
        $data = CoachingSlider::all();
        return response()->json([
            'success' => 200,
            'data' => [
                'id' => $data[0]['id'],
                'imageurl' => $data[0]['imageurl'],
                'alt' => $data[0]['alt'],
                'link' => $data[0]['link']
            ],
        ]);
    }

    public function mentoringdata()
    {
        $data = MentoringSlider::all();
        return response()->json([
            'success' => 200,
            'data' => [
                'id' => $data[0]['id'],
                'imageurl' => $data[0]['imageurl'],
                'alt' => $data[0]['alt'],
                'link' => $data[0]['link']
            ],
        ]);
    }

    public function promotionalimages()
    {
        $data = PromotionSlider::all();
        return response()->json([
            'status' => 200,
            'data' => $data
        ]);
    }

    public function AddPromotionalImages(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'coursename' => 'required',
            'imageurl' => 'required',
            'alt' => 'required',
            'link' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'validation_errors' => $validator->errors(),
            ]);
        } else {
            PromotionSlider::create([
                'coursename' => $req->input('coursename'),
                'imageurl' => $req->input('imageurl'),
                'alt' => $req->input('alt'),
                'link' => $req->input('link')
            ]);
        }

        return response()->json([
            "status" => 201,
            "message" => "Successfully Added the Promotional Image"
        ]);
    }

    public function EditPromotionalImages($id) {
        $data = PromotionSlider::find($id);

        if ($data) {
            return response()->json([
                'status' => 200,
                'data' => $data
            ]);
        } else {
            return response()->json([
                'status' => 401,
                'message' => 'Sorry Data Not Found in the database'
            ]);
        }
    }
}
