<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PopupSliderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('popup_sliders')->insert([
            'imageurl'=>'https://digitalagilityinstitute.com/Api/images/website-pop-up-image.png',
            'alt'=>'Popup',
            'link'=>'https://www.digitalagilityinstitute.com/document/objective-definition-workbook.pdf'
        ]);
    }
}
