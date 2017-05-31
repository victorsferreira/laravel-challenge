<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    function post(){
        // return $this->belongsTo('App\Post');
    }

    public function users()
    {
        return $this->belongsToMany('App\User');
    }

    function posts(){
        return $this->hasManyThrough('App\Post', 'App\Author','group_id', 'author_id', 'id');
    }
}
