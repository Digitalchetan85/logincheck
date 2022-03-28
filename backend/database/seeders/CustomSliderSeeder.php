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
        $data = [
            [
                'imageurl' => 'https://digitalagilityinstitute.com/Api/images/slider/1.png',
                'alt' => 'Expertimental Learning Programs',
                'link' => '/contact-us'
            ],
            [
                'imageurl' => 'https://digitalagilityinstitute.com/Api/images/slider/2.png',
                'alt' => 'Capability Build Programs',
                'link' => '/contact-us'
            ],
            [
                'imageurl' => 'https://digitalagilityinstitute.com/Api/images/slider/3.png',
                'alt' => 'Individual & Leadership Assessments',
                'link' => '/contact-us'
            ],
            [
                'imageurl' => 'https://digitalagilityinstitute.com/Api/images/slider/4.png',
                'alt' => 'Do It Yourself Workbooks',
                'link' => '/contact-us'
            ],
            [
                'imageurl' => 'https://digitalagilityinstitute.com/Api/images/slider/5.png',
                'alt' => 'Book Reviews',
                'link' => '/contact-us'
            ],
            [
                'imageurl' => 'https://digitalagilityinstitute.com/Api/images/slider/6.png',
                'alt' => 'Community Learning Programs',
                'link' => '/contact-us'
            ],
            [
                'imageurl' => 'https://digitalagilityinstitute.com/Api/images/slider/7.png',
                'alt' => 'Mentoring Scrumm Masters & Agile Coaches',
                'link' => '/contact-us'
            ],
            [
                'imageurl' => 'https://digitalagilityinstitute.com/Api/images/slider/8.png',
                'alt' => 'Executive Coaching & Team Coaching',
                'link' => '/contact-us'
            ]
        ];
        DB::table('custom_sliders')->insert($data);
    }
}
