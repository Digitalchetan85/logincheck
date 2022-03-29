<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PopupSlider extends Model
{
    use HasFactory;
    protected $fillable = ['imageurl','alt', 'link'];
}
