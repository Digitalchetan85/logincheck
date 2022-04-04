<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;

class PaymentContoller extends Controller
{
    public function Payment() {
        $data = Payment::all();

        return response()->json([
            'status' => 200,
            'data' => $data
        ]);
    }

    public function PaymentCreate(Request $req)
    {
        $payment = new Payment();
        $payment->name = $req->name;
        $payment->email = $req->email;
        $payment->amount = $req->amount;
        $payment->paymentid = $req->paymentid;
        $payment->save();

        return response()->json([
            'status' => 200,
            'message' => "Successfully Added to the database"
        ]);
    }
}
