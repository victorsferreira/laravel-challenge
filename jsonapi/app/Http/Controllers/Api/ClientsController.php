<?php namespace App\Http\Controllers\Api;

use App\Model\Database\Clients;
use App\Model\Database\Purchases;
use NilPortugues\Laravel5\JsonApi\Controller\JsonApiController;

class ClientsController extends JsonApiController
{
    /**
     * Return the Eloquent model that will be used
     * to model the JSON API resources.
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function getDataModel()
    {
        return new Clients();
    }

    public function getPurchasesByClient(Request $request)
    {
        $apiRequest = RequestFactory::create();
        $page = $apiRequest->getPage();

        if (!$page->size()) {
            $page->setSize(10); //Default elements per page
        }

        $resource = new ListResource(
            $this->serializer,
            $page,
            $apiRequest->getFields(),
            $apiRequest->getSort(),
            $apiRequest->getIncludedRelationships(),
            $apiRequest->getFilters()
        );

        $totalAmount = function() use ($request) {
            $id = (new Purchases())->getKeyName();
            return Purchases::query()
                ->where('client_id', '=', $request->client_id)
                ->get([$id])
                ->count();
        };

        $results = function()  use ($request) {
            return EloquentHelper::paginate(
                $this->serializer,
                Purchases::query()
                    ->where('client_id', '=', $request->client_id)
            )->get();
        };

        $uri = route('clients.purchases', ['client_id' => $request->client_id]);

        return $resource->get($totalAmount, $results, $uri, Purchases::class);
    }

    // function getRequiredProperties(){}
}
