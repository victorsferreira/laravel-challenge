<?php namespace App\Model\Api;

use App\Model\Database\Products;
use NilPortugues\Api\Mappings\JsonApiMapping;

class ProductsTransformer implements JsonApiMapping
{
    /**
     * Returns a string with the full class name, including namespace.
     *
     * @return string
     */
    public function getClass()
    {
        return Products::class;
    }

    /**
     * Returns a string representing the resource name
     * as it will be shown after the mapping.
     *
     * @return string
     */
    public function getAlias()
    {
        return 'product';
    }

    /**
     * Returns an array of properties that will be renamed.
     * Key is current property from the class.
     * Value is the property's alias name.
     *
     * @return array
     */
    public function getAliasedProperties()
    {
        return [
            // 'last_name' => 'surname'
        ];
    }

    /**
     * List of properties in the class that will be  ignored by the mapping.
     *
     * @return array
     */
    public function getHideProperties()
    {
        return [
            // 'attachments'
        ];
    }

    /**
     * Returns an array of properties that are used as an ID value.
     *
     * @return array
     */
    public function getIdProperties()
    {
        return ['id'];
    }

    /**
     * Returns a list of URLs. This urls must have placeholders
     * to be replaced with the getIdProperties() values.
     *
     * @return array
     */
    public function getUrls()
    {
        return [
            'self' => ['name' => 'products.show', 'as_id' => 'id'],
            'products' => ['name' => 'products.index']
        ];
    }

    /**
     * Returns an array containing the relationship mappings as an array.
     * Key for each relationship defined must match a property of the mapped class.
     *
     * @return array
     */
    public function getRelationships()
    {
        return [];
    }

    public function getRequiredProperties()
    {
        return [];
    }
}
