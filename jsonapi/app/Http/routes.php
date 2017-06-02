<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(['namespace' => 'Api'], function() {
    Route::resource('employees', 'EmployeesController');
    Route::resource('orders', 'OrdersController');
    Route::get(
        'employees/{employee_id}/orders', [
            'as' => 'employees.orders',
            'uses' => 'EmployeesController@getOrdersByEmployee'
        ]);

        Route::resource('clients', 'ClientsController');
        Route::resource('purchases', 'PurchasesController');
        Route::resource('products', 'ProductsController');
    });
