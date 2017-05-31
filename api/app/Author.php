<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    function post(){
        // return $this->belongsTo('App\Post');
    }

    public function groups()
    {
        // return $this->belongsToMany('App\Group', 'group_user', 'user_id', 'group_id');

        return $this->belongsToMany('App\Group')->withPivot('column1', 'column2')->withTimestamps()->wherePivot('status', 1);
    }
}
