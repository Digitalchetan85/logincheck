<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CoachingSliderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('coaching_sliders')->insert([
            'name'=>'Coaching',
            'alt'=>'Promotion',
            'link'=>'https://digitalagilityinstitute.com/Api/images/promotion/promotion.png'
        ]);
    }
}
