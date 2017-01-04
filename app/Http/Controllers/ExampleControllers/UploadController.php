<?php

namespace App\Http\Controllers\ExampleControllers;

use App\Http\Controllers\Controller;
use BannersCreator\Services\PSDParser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Validator;
use File;
use Session;
use Redirect;


class UploadController extends Controller
{

    public function __construct()
    {
        $this->middleware('guest');
    }

    public function uploadFile()
    {

        $path = 'uploadImage/';

        if (isset($_FILES['file'])) {
          $originalName = $_FILES['file']['name'];
          $ext = '.'.pathinfo($originalName, PATHINFO_EXTENSION);
          $generatedName = md5($_FILES['file']['tmp_name']).$ext;
          $filePath = $path.$generatedName;

          if (!is_writable($path)) {
            echo json_encode(array(
              'status' => false,
              'msg'    => 'Destination directory not writable.'
            ));
            exit;
          }

          if (move_uploaded_file($_FILES['file']['tmp_name'], $filePath)) {
            echo json_encode(array(
              'status'        => true,
              'originalName'  => $originalName,
              'generatedName' => $generatedName
            ));
          }
        }
        else {
          echo json_encode(
            array('status' => false, 'msg' => 'No file uploaded.')
          );
          exit;
        }



    }
}
