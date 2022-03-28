<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PromotionSliderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('promotion_sliders')->insert([
            
            'coursename'=>'Coaching',
            'imageurl'=>'https://digitalagilityinstitute.com/Api/images/promotion/promotion.png',
            'alt'=>'Agile Coaching SAFE',
            'link'=>'/contact-us'
        ]);
    }
}
