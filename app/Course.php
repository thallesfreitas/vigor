<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $table = 'courses';

    protected $fillable = ['author', 'name', 'description', 'price', 'image'];

    protected $guarded = ['id'];
}