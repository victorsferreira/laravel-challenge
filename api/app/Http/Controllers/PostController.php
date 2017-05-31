<?php

namespace App\Http\Controllers;

use \App\Post;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Response;

class PostController extends Controller
{
    /**
    * Show the profile for the given user.
    *
    * @param  int  $id
    * @return Response
    */
    public function index()
    {
        $posts = \App\Post::all();

        return response()->json($posts);
    }
}
