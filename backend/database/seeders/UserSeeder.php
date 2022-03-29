<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'name'=>'chetan',
                'email'=>'chetankumar.nv@gmail.com',
                'password'=>Hash::make("12345678"),
                'admin' => 1
            ],
            [
                'name'=>'chetan',
                'email'=>'behappychethu@gmail.com',
                'password'=>Hash::make("12345678"),
                'admin' => 0
            ]
        ];
        DB::table('users')->insert($data);
    }
}
