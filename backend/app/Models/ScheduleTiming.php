<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ScheduleTiming extends Model
{
    use HasFactory;
    protected $fillable = ['coursename', 'coursetimings'];
}
