<?php namespace App\Model\Database;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Validation\ValidatesRequests;

class Employees extends Model
{
    public $timestamps = false;
    protected $table = 'employees';
    protected $primaryKey = 'id';
    protected $appends = ['full_name'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function latestOrders()
    {
        return $this->hasMany(Orders::class, 'employee_id')->limit(10);
    }

    /**
     * @return string
     */
    public function getFullNameAttribute()
    {
        return $this->first_name.' '.$this->last_name;
    }
}
