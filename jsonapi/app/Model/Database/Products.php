<?php namespace App\Model\Database;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    // public $timestamps = false;
    protected $table = 'products';
    protected $primaryKey = 'id';

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
     public function purchases()
     {
         return $this->hasMany(Purchases::class,'product_id');
     }
}
