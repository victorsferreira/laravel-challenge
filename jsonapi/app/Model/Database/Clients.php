<?php namespace App\Model\Database;

use Illuminate\Database\Eloquent\Model;

class Clients extends Model
{
    // public $timestamps = false;
    protected $table = 'clients';
    protected $primaryKey = 'id';
    protected $fillable = ['name','cpf','email','created_at','updated_at','deleted_at'];


    /**
    * @return \Illuminate\Database\Eloquent\Relations\HasOne
    */
    // public function purchases()
    // {
    //     return $this->hasMany(Purchases::class,'client_id');
    // }

    // public function products()
    // {
    //     return $this->hasManyThrough(Products::class, Purchases::class, 'client_id', 'id', '');
    // }
}
