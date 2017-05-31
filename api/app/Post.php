<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = ['title, description'];
    protected $guarded = ['status'];

    function author(){
        // return $this->hasOne('App\Author'); //one to one $this->hasOne('App\Author', 'foreign_key', 'local_key');
    }

    function comments(){
        // return $this->hasMany('App\Comment'); //return $this->hasMany('App\Comment', 'foreign_key', 'local_key');
    }
}
