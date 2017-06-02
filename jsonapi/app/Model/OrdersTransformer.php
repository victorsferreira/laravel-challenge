<?php namespace App\Model\Api;

use App\Model\Database\Orders;
use NilPortugues\Api\Mappings\JsonApiMapping;

class OrdersTransformer implements JsonApiMapping
{
    /**
     * {@inheritDoc}
     */
    public function getClass()
    {
        return Orders::class;
    }
    /**
     * {@inheritDoc}
     */
    public function getAlias()
    {
        return 'order';
    }
    /**
     * {@inheritDoc}
     */
    public function getAliasedProperties()
    {
        return [];
    }
    /**
     * {@inheritDoc}
     */
    public function getHideProperties()
    {
        return [];
    }
    /**
     * {@inheritDoc}
     */
    public function getIdProperties()
    {
        return ['id'];
    }
    /**
     * {@inheritDoc}
     */
    public function getUrls()
    {
        return [
            'self'     => ['name' => 'orders.show', 'as_id' => 'id'],
            'employee' => ['name' => 'employees.show', 'as_id' => 'employee_id'],
        ];
    }
    /**
     * {@inheritDoc}
     */
    public function getRelationships()
    {
        return [];
    }

    /**
     * List the fields that are mandatory in a persitence action (POST/PUT).
     * If empty array is returned, all fields are mandatory.
     */
    public function getRequiredProperties()
    {
        return [];
    }
} 
