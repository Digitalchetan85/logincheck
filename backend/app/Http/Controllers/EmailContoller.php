<?php

namespace App\Http\Controllers;

use App\Mail\PaymentEmail;
use App\Mail\Practice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailContoller extends Controller
{
    public function Email(Request $req)
    {
        $details = [
            'email' => $req->email,
            'name' => $req->name,
            'phone' => $req->phone,
            'schedule' => $req->schedule,
        ];

        // return $details;
        Mail::to('chetankumar.nv@gmail.com')
                ->send(new Practice($details));

        return response()->json([
            'status' => 200,
            'message' => 'Success!',
        ]);
    }

    public function PaymantEmail(Request $req)
    {
        $details = [
            'name' => $req->name,
            'email' => $req->email,
            'phone' => $req->phone,
            'coursename' => $req->coursename,
            'amount' => $req->amount,
            'paymentid' => $req->paymentid,
            'schedule' => $req->schedule
        ];

        Mail::to('chetankumar.nv@gmail.com')->send(new PaymentEmail($details));

        return response()->json([
            'status' => 200,
            'message' => 'Success!',
            'amount' => $req->amount,
            'paymentid' => $req->paymentid
        ]);
    }
}
