<?php namespace App\Model\Database;

use Illuminate\Database\Eloquent\Model;

class Purchases extends Model
{
    // public $timestamps = false;
    protected $table = 'purchases';
    protected $primaryKey = 'id';

    /**
    * @return \Illuminate\Database\Eloquent\Relations\HasOne
    */
    public function product()
    {
        return $this->belongsTo(Products::class);
    }

    public function client()
    {
        return $this->belongsTo(Clients::class);
    }
}
