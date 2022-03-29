<?php

namespace App\Http\Controllers;

use App\Models\CoachingSlider;
use App\Models\CustomSlider;
use App\Models\MentoringSlider;
use App\Models\PopupSlider;
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
        if ($data) {
            return response()->json([
                'status' => 200,
                'data' => $data
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Records not found'
            ]);
        }
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
            PromotionSlider::saveAll([
                'coursename' => $req->coursename,
                'imageurl' => $req->imageurl,
                'alt' => $req->alt,
                'link' => $req->link
            ]);
        }

        return response()->json([
            "status" => 201,
            "message" => "Successfully Updated the Promotional Image"
        ]);
    }

    public function UpdatePromotionalImages(Request $req)
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
            PromotionSlider::where('id', $req->id)->update([
                'coursename' => $req->coursename,
                'imageurl' => $req->imageurl,
                'alt' => $req->alt,
                'link' => $req->link
            ]);
        }

        return response()->json([
            "status" => 201,
            "message" => "Successfully Updated the Promotional Image"
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

    public function DeletePromotionalImages (Request $req) {
        // return $req->all();
        $data = PromotionSlider::where('id', $req->id)->delete();

        if ($data) {
            return response()->json([
                'status' => 200,
                'message' => "Successfully deleted"
            ]);
        } else {
            return response()->json([
                'status' => 401,
                'message' => 'Sorry Try again'
            ]);
        }
    }

    public function HomeSlider (Request $req) {
        $data = CustomSlider::all();
        if ($data) {
            return response()->json([
                'status' => 200,
                'data' => $data
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Records not found'
            ]);
        }
    }

    public function AddHomeSlider(Request $req)
    {
        $validator = Validator::make($req->all(), [
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
            CustomSlider::create([
                'imageurl' => $req->imageurl,
                'alt' => $req->alt,
                'link' => $req->link
            ]);
        }

        return response()->json([
            "status" => 201,
            "message" => "Successfully Added the HomeSlider Image"
        ]);
    }

    public function UpdateHomeSlider(Request $req)
    {
        $validator = Validator::make($req->all(), [
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
            CustomSlider::where('id', $req->id)->update([
                'imageurl' => $req->imageurl,
                'alt' => $req->alt,
                'link' => $req->link
            ]);
        }

        return response()->json([
            "status" => 201,
            "message" => "Successfully Added the HomeSlider Image"
        ]);
    }

    public function EditHomeSlider($id) {
        $data = CustomSlider::find($id);

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

    public function DeleteHomeSlider (Request $req) {
        // return $req->all();
        $data = CustomSlider::where('id', $req->id)->delete();

        if ($data) {
            return response()->json([
                'status' => 200,
                'message' => "Successfully deleted"
            ]);
        } else {
            return response()->json([
                'status' => 401,
                'message' => 'Sorry Try again'
            ]);
        }
    }


    // popup

    public function PopSlider (Request $req) {
        $data = PopupSlider::all();
        if ($data) {
            return response()->json([
                'status' => 200,
                'data' => $data
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Records not found'
            ]);
        }
    }

    public function AddPopSlider(Request $req)
    {
        $validator = Validator::make($req->all(), [
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
            PopupSlider::create([
                'imageurl' => $req->imageurl,
                'alt' => $req->alt,
                'link' => $req->link
            ]);
        }

        return response()->json([
            "status" => 201,
            "message" => "Successfully Added the HomeSlider Image"
        ]);
    }

    public function UpdatePopSlider(Request $req)
    {
        $validator = Validator::make($req->all(), [
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
            PopupSlider::where('id', $req->id)->update([
                'imageurl' => $req->imageurl,
                'alt' => $req->alt,
                'link' => $req->link
            ]);
        }

        return response()->json([
            "status" => 201,
            "message" => "Successfully Added the HomeSlider Image"
        ]);
    }

    public function EditPopSlider($id) {
        $data = PopupSlider::find($id);

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

    public function DeletePopSlider (Request $req) {
        // return $req->all();
        $data = PopupSlider::where('id', $req->id)->delete();

        if ($data) {
            return response()->json([
                'status' => 200,
                'message' => "Successfully deleted"
            ]);
        } else {
            return response()->json([
                'status' => 401,
                'message' => 'Sorry Try again'
            ]);
        }
    }

    // Mentoring Slider

    public function MentoringSlider (Request $req) {
        $data = PopupSlider::all();
        if ($data) {
            return response()->json([
                'status' => 200,
                'data' => $data
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Records not found'
            ]);
        }
    }

    public function AddMentoringSlider(Request $req)
    {
        $validator = Validator::make($req->all(), [
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
            PopupSlider::create([
                'imageurl' => $req->imageurl,
                'alt' => $req->alt,
                'link' => $req->link
            ]);
        }

        return response()->json([
            "status" => 201,
            "message" => "Successfully Added the HomeSlider Image"
        ]);
    }

    public function UpdateMentoringSlider(Request $req)
    {
        $validator = Validator::make($req->all(), [
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
            PopupSlider::where('id', $req->id)->update([
                'imageurl' => $req->imageurl,
                'alt' => $req->alt,
                'link' => $req->link
            ]);
        }

        return response()->json([
            "status" => 201,
            "message" => "Successfully Added the HomeSlider Image"
        ]);
    }

    public function EditMentoringSlider($id) {
        $data = PopupSlider::find($id);

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

    public function DeleteMentoringSlider (Request $req) {
        // return $req->all();
        $data = PopupSlider::where('id', $req->id)->delete();

        if ($data) {
            return response()->json([
                'status' => 200,
                'message' => "Successfully deleted"
            ]);
        } else {
            return response()->json([
                'status' => 401,
                'message' => 'Sorry Try again'
            ]);
        }
    }
}
