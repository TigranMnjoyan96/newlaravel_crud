<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{

    public  $table = 'tags';

    protected $fillable = [
        'name'
    ];


    public function tasks()
    {
        return $this->hasMany('App\Task', 'tagId');
    }
}
