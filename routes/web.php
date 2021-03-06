<?php

use Illuminate\Support\Facades\Route;

use app\Http\Controllers;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('/userLogin', function () {
    return view('dashboard_user');
});
Route::get( '/home', function () {
    return view('home');
});
Route::get( '/design', function () {
    return view('home');
});
Route::get( '/gallery', function () {
    return view('home');
});
//Route::get( '/support', function () {
//    return view('home');
//});
Route::get( '/about_us', function () {
    return view('home');
});
Route::get( '/contact', function () {
    return view('home');
});
Route::get( '/cart', function () {
    return view('home');
});
Route::get( '/login', function () {
    return view('home');
});
Route::get( '/register', function () {
    return view('home');
});
Route::get( '/product/booklets', function () {
    return view('home');
});
Route::get( '/product/brochures', function () {
    return view('home');
});
Route::get( '/product/businesscards', function () {
    return view('home');
});
//Route::get( '/product/deskpadsNotepads', function () {
//    return view('home');
//});
Route::get( '/product/signage', function () {
    return view('home');
});
Route::get( '/product/envelopes', function () {
    return view('home');
});
Route::get( '/product/banner', function () {
    return view('home');
});
Route::get( '/product/flyers', function () {
    return view('home');
});
//Route::get( '/product/fridgeMagnets', function () {
//    return view('home');
//});
Route::get( '/product/letterheads', function () {
    return view('home');
});
Route::get( '/product/postcards', function () {
    return view('home');
});
Route::get( '/product/posters', function () {
    return view('home');
});
Route::get( '/product/presentationFolders', function () {
    return view('home');
});
//Route::get( '/product/directMarketing', function () {
//    return view('home');
//});
Route::get( '/product/dl_compliments', function () {
    return view('home');
});
//Route::get( '/product/websiteDesign', function () {
//    return view('home');
//});
Route::get( '/terms', function () {
    return view('home');
});
Route::get( '/privacy', function () {
    return view('home');
});
//Route::get( '/sample', function () {
//    return view('home');
//});
Route::get( '/orderprocess', function () {
    return view('home');
});
//Route::get( '/delivery', function () {
//    return view('home');
//});
//Route::get( '/fileGuidelines', function () {
//    return view('home');
//});
Route::get( '/product/brochures/a4-dl', function () {
    return view('home');
});
Route::get( '/product/brochures/a4-a5', function () {
    return view('home');
});
Route::get( '/product/brochures/a3-a4', function () {
    return view('home');
});
Route::get( '/product/flyers/learnmore', function () {
    return view('home');
});
Route::get( '/product/posters/learnmore', function () {
    return view('home');
});
Route::get( '/product/postcards/learnmore', function () {
    return view('home');
});
//Route::get( '/pre-flight-checks', function () {
//    return view('home');
//});
Route::get( '/colour-critical', function () {
    return view('home');
});
// Route::get('/test1', function () {
//     return view('dashboard_user');
// });
Route::get( '/account', function () {
    return view('home');
});


$api = app(\Dingo\Api\Routing\Router::class);

$api->version('v1',['namespace' => 'App\Http\Controllers'],function ($api) {

    $api->post('userLogin', 'UserController@userLogin')->middleware('web');
    $api->post('userRegister','UserController@userRegister');
    $api->post('forgetPassword','UserController@forgetPassword');
    $api->post('userUpdateMessage','UserController@userUpdateMessage');

    $api->post('checkUserStatus','UserController@loginStatus')->middleware('web');
    $api->post('userLogput','UserController@loginOut')->middleware('web');

    $api->post('card','OrderController@addOrder');
    // eamil
    $api->post('contactUs','EmailController@contactEmail');
    $api->post('booklets','EmailController@bookletsEmail');
    // $api->post('websiteDesign','EmailController@websiteDesignEmail');
    // $api->post('samplePack','EmailController@samplePackEmail');
    // cart
    $api->post('cartEmail','EmailController@orderEmail');

    // upload file
    $api->post('uploadFile','EmailController@uploadFile');

    //pay money
    $api->post('getAccessCode','PayController@getAccessCode');
    $api->post('getPayResult','PayController@getPayResult');




    $api->get('getNumOfOrders','DashboardController@getNumOfOrders');
    $api->get('getNumOfClients','DashboardController@getNumOfClients');
    $api->get('getAmount','DashboardController@getAmount');
    $api->get('getOrderAndAmountByMonth/{startDate}/{endDate}','DashboardController@getOrderAndAmountByMonth');
    $api->get('getAllOrder/{startDate}/{endDate}','DashboardController@getAllOrder');
    $api->get('getAllUser','DashboardController@getAllUser');
    $api->get('getAllOrderByUser/{user}','DashboardController@getAllOrderByUser');
    $api->get('getOrderAndAmountByMonthUser/{startDate}/{endDate}/{user}','DashboardController@getOrderAndAmountByMonthUser');
    $api->get('getNumOfOrdersByUser/{user}','DashboardController@getNumOfOrdersByUser');
    $api->get('getAmountByUser/{user}','DashboardController@getAmountByUser');
    $api->get('getProfile/{user}','DashboardController@getProfile');


});
