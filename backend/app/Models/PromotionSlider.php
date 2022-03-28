<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PromotionSlider extends Model
{
    use HasFactory;
    protected $fillable = ['coursename', 'imageurl', 'alt', 'link'];
}
