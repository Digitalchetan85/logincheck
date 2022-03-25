<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ScheduleTimingSeeder extends Seeder
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
                'coursename' => 'ICP - CAT',
                'coursetimings' => 'January 15, 16 (8 AM - 3 PM IST India)'
            ],
            [
                'coursename' => 'ICP - ENT',
                'coursetimings' => 'January 22, 23, 29, 30 (8 AM - 1 PM IST India)'
            ],
            [
                'coursename' => 'ICP - CAT',
                'coursetimings' => 'February 12, 13 (8 AM - 3 PM IST India)'
            ],
            [
                'coursename' => 'ICP - ENT',
                'coursetimings' => 'February 19, 20, 26, 27 (8 AM - 1 PM IST India)'
            ],
            [
                'coursename' => 'ICP - CAT',
                'coursetimings' => 'March 12, 13 (8 AM - 3 PM IST India)'
            ],
            [
                'coursename' => 'ICP - CAT',
                'coursetimings' => 'April 9, 10 (8 AM - 3 PM IST India)'
            ],
            [
                'coursename' => 'ICP - CAT',
                'coursetimings' => 'May 14, 15 (8 AM - 3 PM IST India)'
            ],
            [
                'coursename' => 'ICP - CAT',
                'coursetimings' => 'June 11, 12 (8 AM - 3 PM IST India)'
            ],
            [
                'coursename' => 'ICP - CAT',
                'coursetimings' => 'January 10, 11, 12, 13 (12 PM - 3:30 PM EST | 5 PM - 8:30 PM GMT)'
            ],
            [
                'coursename' => 'ICP - CAT',
                'coursetimings' => 'February 7, 8, 9, 10 (12 PM - 3:30 PM EST | 5 PM - 8:30 PM GMT)'
            ],
            [
                'coursename' => 'ICP - CAT',
                'coursetimings' => 'March 7, 8, 9, 10 (12 PM - 3:30 PM EST | 5 PM - 8:30 PM GMT)'
            ],
            [
                'coursename' => 'ICP - CAT',
                'coursetimings' => 'April 4, 5, 6, 7 (12 PM - 3:30 PM EST | 5 PM - 8:30 PM BST)'
            ],
            [
                'coursename' => 'ICP - CAT',
                'coursetimings' => 'May 2, 3, 4, 5 (12 PM - 3:30 PM EST | 5 PM - 8:30 PM BST)'
            ],
            [
                'coursename' => 'ICP - CAT',
                'coursetimings' => 'June 6, 7, 8, 9 (12 PM - 3:30 PM EST | 5 PM - 8:30 PM BST)'
            ],
            [
                'coursename' => 'ICP - ENT',
                'coursetimings' => 'March 19, 20, 26, 27 (8 AM - 1 PM IST India)'
            ],
            [
                'coursename' => 'ICP - ENT',
                'coursetimings' => 'April 16, 17, 23, 24 (8 AM - 1 PM IST India)'
            ],
            [
                'coursename' => 'ICP - ENT',
                'coursetimings' => 'May 21, 22, 28, 29 (8 AM - 1 PM IST India)'
            ],
            [
                'coursename' => 'ICP - ENT',
                'coursetimings' => 'June 18, 19, 25, 26 (8 AM - 1 PM IST India)'
            ],
            [
                'coursename' => 'ICP - ENT',
                'coursetimings' => 'January 17, 18, 19, 20, 21Ã‚Â  (12 PM - 4 PM EST | 5 PM - 9 PM GMT)'
            ],
            [
                'coursename' => 'ICP - ENT',
                'coursetimings' => 'February 14, 15, 16, 17, 18 (12 PM - 4 PM EST | 5 PM - 9 PM GMT)'
            ],
            [
                'coursename' => 'ICP - ENT',
                'coursetimings' => 'March 14, 15, 16, 17, 18 (12 PM - 4 PM EST | 5 PM - 9 PM GMT)'
            ],
            [
                'coursename' => 'ICP - ENT',
                'coursetimings' => 'April 11, 12, 13, 14, 15 (12 PM - 4 PM EST | 5 PM - 9 PM BST)'
            ],
            [
                'coursename' => 'ICP - ENT',
                'coursetimings' => 'May 9, 10, 11, 12, 13 (12 PM - 4 PM EST | 5 PM - 9 PM BST)'
            ],
            [
                'coursename' => 'ICP - ENT',
                'coursetimings' => 'June 13, 14, 15, 16, 17 (12 PM - 4 PM EST | 5 PM - 9 PM BST)'
            ],
            [
                'coursename' => 'ICP - ACC',
                'coursetimings' => 'January 15, 16 (8 AM - 3 PM IST India)'
            ],
            [
                'coursename' => 'ICP - ACC',
                'coursetimings' => 'February 12, 13 (8 AM - 3 PM IST India)'
            ],
            [
                'coursename' => 'ICP - ACC',
                'coursetimings' => 'March 12, 13 (8 AM - 3 PM IST India)'
            ],
            [
                'coursename' => 'ICP - ACC',
                'coursetimings' => 'April 9, 10 (8 AM - 3 PM IST India)'
            ],
            [
                'coursename' => 'ICP - ACC',
                'coursetimings' => 'May 14, 15 (8 AM - 3 PM IST India)'
            ],
            [
                'coursename' => 'ICP - ACC',
                'coursetimings' => 'June 11, 12 (8 AM - 3 PM IST India)'
            ],
            [
                'coursename' => 'ICP - ACC',
                'coursetimings' => 'January 10, 11, 12, 13 (12 PM - 3:30 PM EST | 5 PM - 8:30 PM GMT)'
            ],
            [
                'coursename' => 'ICP - ACC',
                'coursetimings' => 'February 7, 8, 9, 10 (12 PM - 3:30 PM EST | 5 PM - 8:30 PM GMT)'
            ],
            [
                'coursename' => 'ICP - ACC',
                'coursetimings' => 'March 7, 8, 9, 10 (12 PM - 3:30 PM EST | 5 PM - 8:30 PM GMT)'
            ],
            [
                'coursename' => 'ICP - ACC',
                'coursetimings' => 'April 4, 5, 6, 7 (12 PM - 3:30 PM EST | 5 PM - 8:30 PM BST)'
            ],
            [
                'coursename' => 'ICP - ACC',
                'coursetimings' => 'May 2, 3, 4, 5 (12 PM - 3:30 PM EST | 5 PM - 8:30 PM BST)'
            ],
            [
                'coursename' => 'ICP - ACC',
                'coursetimings' => 'June 6, 7, 8, 9 (12 PM - 3:30 PM EST | 5 PM - 8:30 PM BST)'
            ],
            [
                'coursename' => 'ICP - ORG',
                'coursetimings' => 'January 15, 16 (8 AM - 3 PM IST India)'
            ],
            [
                'coursename' => 'ICP - ORG',
                'coursetimings' => 'February 12, 13 (8 AM - 3 PM IST India)'
            ],
            [
                'coursename' => 'ICP - ORG',
                'coursetimings' => 'March 12, 13 (8 AM - 3 PM IST India)'
            ],
            [
                'coursename' => 'ICP - ORG',
                'coursetimings' => 'April 9, 10 (8 AM - 3 PM IST India)'
            ],
            [
                'coursename' => 'ICP - ORG',
                'coursetimings' => 'April 9, 10 (8 AM - 3 PM IST India)'
            ],
            [
                'coursename' => 'ICP - ORG',
                'coursetimings' => 'May 14, 15 (8 AM - 3 PM IST India)'
            ],
            [
                'coursename' => 'ICP - ORG',
                'coursetimings' => 'June 11, 12 (8 AM - 3 PM IST India)'
            ],
            [
                'coursename' => 'ICP - ORG',
                'coursetimings' => 'January 10, 11, 12, 13 (12 PM - 3:30 PM EST | 5 PM - 8:30 PM GMT)'
            ],
            [
                'coursename' => 'ICP - ORG',
                'coursetimings' => 'February 7, 8, 9, 10 (12 PM - 3:30 PM EST | 5 PM - 8:30 PM GMT)'
            ],
            [
                'coursename' => 'ICP - ORG',
                'coursetimings' => 'March 7, 8, 9, 10 (12 PM - 3:30 PM EST | 5 PM - 8:30 PM GMT)'
            ],
            [
                'coursename' => 'ICP - ORG',
                'coursetimings' => 'April 4, 5, 6, 7 (12 PM - 3:30 PM EST | 5 PM - 8:30 PM BST)'
            ],
            [
                'coursename' => 'ICP - ORG',
                'coursetimings' => 'May 2, 3, 4, 5 (12 PM - 3:30 PM EST | 5 PM - 8:30 PM BST)'
            ],
            [
                'coursename' => 'ICP - ORG',
                'coursetimings' => 'June 6, 7, 8, 9 (12 PM - 3:30 PM EST | 5 PM - 8:30 PM BST)'
            ],
            [
                'coursename' => ' ICP - ATF',
                'coursetimings' => 'January 22, 23, 29, 30 (8 AM - 1 PM IST India)'
            ],
            [
                'coursename' => ' ICP - ATF',
                'coursetimings' => 'February 19, 20, 26, 27 (8 AM - 1 PM IST India)'
            ],
            [
                'coursename' => ' ICP - ATF',
                'coursetimings' => 'March 19, 20, 26, 27 (8 AM - 1 PM IST India)'
            ],
            [
                'coursename' => ' ICP - ATF',
                'coursetimings' => 'April 16, 17, 23, 24 (8 AM - 1 PM IST India)'
            ],
            [
                'coursename' => ' ICP - ATF',
                'coursetimings' => 'May 21, 22, 28, 29 (8 AM - 1 PM IST India)'
            ],
            [
                'coursename' => ' ICP - ATF',
                'coursetimings' => 'June 18, 19, 25, 26 (8 AM - 1 PM IST India)'
            ],
            [
                'coursename' => ' ICP - ATF',
                'coursetimings' => 'January 17, 18, 19, 20, 21Ã‚Â  (12 PM - 4 PM EST | 5 PM - 9 PM GMT)'
            ],
            [
                'coursename' => ' ICP - ATF',
                'coursetimings' => 'March 14, 15, 16, 17, 18 (12 PM - 4 PM EST | 5 PM - 9 PM GMT)'
            ],
            [
                'coursename' => ' ICP - ATF',
                'coursetimings' => 'April 11, 12, 13, 14, 15 (12 PM - 4 PM EST | 5 PM - 9 PM BST)'
            ],
            [
                'coursename' => ' ICP - ATF',
                'coursetimings' => 'May 9, 10, 11, 12, 13 (12 PM - 4 PM EST | 5 PM - 9 PM BST)'
            ],
            [
                'coursename' => ' ICP - ATF',
                'coursetimings' => 'June 13, 14, 15, 16, 17 (12 PM - 4 PM EST | 5 PM - 9 PM BST)'
            ],
            [
                'coursename' => 'ICP - PDV',
                'coursetimings' => 'January 22, 23, 29, 30 (8 AM - 1 PM IST India)'
            ],
            [
                'coursename' => 'ICP - PDV',
                'coursetimings' => 'February 19, 20, 26, 27 (8 AM - 1 PM IST India)'
            ],
            [
                'coursename' => 'ICP - PDV',
                'coursetimings' => 'March 19, 20, 26, 27 (8 AM - 1 PM IST India)'
            ],
            [
                'coursename' => 'ICP - PDV',
                'coursetimings' => 'April 16, 17, 23, 24 (8 AM - 1 PM IST India)'
            ],
            [
                'coursename' => 'ICP - PDV',
                'coursetimings' => 'May 21, 22, 28, 29 (8 AM - 1 PM IST India)'
            ],
            [
                'coursename' => 'ICP - PDV',
                'coursetimings' => 'June 18, 19, 25, 26 (8 AM - 1 PM IST India)'
            ],
            [
                'coursename' => 'ICP - PDV',
                'coursetimings' => 'January 17, 18, 19, 20, 21Ã‚Â  (12 PM - 4 PM EST | 5 PM - 9 PM GMT)'
            ],
            [
                'coursename' => 'ICP - PDV',
                'coursetimings' => 'February 14, 15, 16, 17, 18 (12 PM - 4 PM EST | 5 PM - 9 PM GMT)'
            ],
            [
                'coursename' => 'ICP - PDV',
                'coursetimings' => 'March 14, 15, 16, 17, 18 (12 PM - 4 PM EST | 5 PM - 9 PM GMT)'
            ],
            [
                'coursename' => 'ICP - PDV',
                'coursetimings' => 'April 11, 12, 13, 14, 15 (12 PM - 4 PM EST | 5 PM - 9 PM BST)'
            ],
            [
                'coursename' => 'ICP - PDV',
                'coursetimings' => 'May 9, 10, 11, 12, 13 (12 PM - 4 PM EST | 5 PM - 9 PM BST)'
            ],
            [
                'coursename' => 'ICP -PDV',
                'coursetimings' => 'June 13, 14, 15, 16, 17 (12 PM - 4 PM EST | 5 PM - 9 PM BST)'
            ]
        ];
        DB::table('schedule_timings')->insert($data);
    }
}
