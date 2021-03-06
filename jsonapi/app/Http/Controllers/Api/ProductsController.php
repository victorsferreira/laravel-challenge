<?php namespace App\Http\Controllers\Api;

use App\Model\Database\Products;
use App\Model\Database\Orders;
use NilPortugues\Laravel5\JsonApi\Controller\JsonApiController;

class ProductsController extends JsonApiController
{
    /**
     * Return the Eloquent model that will be used
     * to model the JSON API resources.
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function getDataModel()
    {
        return new Products();
    }

    // function getRequiredProperties(){}
}
