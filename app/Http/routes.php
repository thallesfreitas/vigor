<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Angular 2 base route resolving
/*Route::get('/', [
    'uses' => 'ExampleControllers\AngularRoutesController@index',
    'as' => 'home'
]);
*/
Route::get('/fi', [
    'uses' => 'ExampleControllers\AngularRoutesController@index',
    'as' => 'home'
]);
// Angular 2 base `/edit` route resolving
Route::get('/edit', 			'ExampleControllers\AngularRoutesController@index');
Route::get('/segundo', 			'ExampleControllers\AngularRoutesController@index');

Route::get('/', [
    'uses' => 'ExampleControllers\AngularRoutesController@index',
    'as' => 'listcourse'
]);

Route::get('/listcourse', 		'ExampleControllers\AngularRoutesController@index');
Route::get('/course/{id}', 		'ExampleControllers\AngularRoutesController@index');

Route::get('/course/edit/{id}', 'ExampleControllers\AngularRoutesController@index');
Route::get('/course/create/new',    'ExampleControllers\AngularRoutesController@index');
Route::get('/DemoComponent', 	'ExampleControllers\AngularRoutesController@index');

// Angular 2 templates route
Route::get('/templates/{template}', 'ExampleControllers\AngularTemplatesController@index');

// API route
Route::post('/api/upload-file', 'ExampleControllers\UploadController@uploadFile');

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    //
});

Route::group(['prefix' => 'api', 'middleware' => ['cors']], function(){
    Route::resource('courses', 'CourseController', ['except' => [
        'create', 'edit'
    ]]);
});

/*

Route::group(['prefix' => 'api', 'middleware' => ['cors']], function(){
    Route::resource('courses', 'CourseController', ['except' => [
        'create', 'edit'
    ]]);
});
*/
Route::group(['prefix' => 'api', 'middleware' => ['cors']], function(){
    Route::get('upload', function() {
      return View::make('pages.upload');
    });
});

Route::group(['prefix' => 'api', 'middleware' => ['cors']], function(){
    // Route::post('apply/upload', 'ApplyController@upload');
    Route::post('apply/upload', 'ExampleControllers\UploadImageController@upload');
    // Route::post('/api/upload-file', 'ExampleControllers\UploadImageController@upload');
});