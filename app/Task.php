<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = [
        'title', 'description', 'tagId'
    ];


    public function tags()
    {
        return $this->hasMany('App\Tag');
    }
}
