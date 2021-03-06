<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MentoringSliderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('mentoring_sliders')->insert([
            'imageurl'=>'https://digitalagilityinstitute.com/Api/images/promotion/coaching-promotion.png',
            'alt'=>'Mentoring Coaching Promotion',
            'link'=>'/contact-us'
        ]);
    }
}
