<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class MovieController extends Controller
{
    public function show($slug)
    {
        
        $movie = Movie::where('slug', $slug)->first();

       

        return inertia('User/Dashboard/Movie/show', ['movie' => $movie]);
    }
}

