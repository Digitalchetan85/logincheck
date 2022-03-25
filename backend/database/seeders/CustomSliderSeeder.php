<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CustomSliderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('custom_sliders')->insert([
            'name'=>'Custom Slider',
            'alt'=>'Expertimental Learning Programs',
            'link'=>'https://digitalagilityinstitute.com/Api/images/slider/1.png'
        ],
        [
            'name'=>'Custom Slider',
            'alt'=>'Capability Build Programs',
            'link'=>'https://digitalagilityinstitute.com/Api/images/slider/2.png'
        ],
        [
            'name'=>'Custom Slider',
            'alt'=>'Individual & Leadership Assessments',
            'link'=>'https://digitalagilityinstitute.com/Api/images/slider/3.png'
        ],
        [
            'name'=>'Custom Slider',
            'alt'=>'Do It Yourself Workbooks',
            'link'=>'https://digitalagilityinstitute.com/Api/images/slider/4.png'
        ],
        [
            'name'=>'Custom Slider',
            'alt'=>'Book Reviews',
            'link'=>'https://digitalagilityinstitute.com/Api/images/slider/5.png'
        ],
        [
            'name'=>'Custom Slider',
            'alt'=>'Community Learning Programs',
            'link'=>'https://digitalagilityinstitute.com/Api/images/slider/6.png'
        ],
        [
            'name'=>'Custom Slider',
            'alt'=>'Mentoring Scrumm Masters & Agile Coaches',
            'link'=>'https://digitalagilityinstitute.com/Api/images/slider/7.png'
        ],
        [
            'name'=>'Custom Slider',
            'alt'=>'Executive Coaching & Team Coaching',
            'link'=>'https://digitalagilityinstitute.com/Api/images/slider/8.png'
        ]
    );
    }
}
