<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\User\DashboardController;




Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::redirect('/', '/login'); 

Route::middleware(['auth', 'role:user'])->prefix('dashboard')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
});




Route::prefix('prototype')->name('prototype.')->group(function(){

    Route::get('/login', function(){
        return Inertia::render('Prototype/login');
    })->name('login');

    Route::get('/register', function(){
        return Inertia::render('Prototype/register');
    })->name('register');

    Route::get('/dashboard' , function(){
        return Inertia::render('Prototype/dashboard');
    })->name('dashboard');

    Route::get('/subscription', function(){
        return Inertia::render('Prototype/subscription');
    })->name('subscription');

    Route::get('/movie/{slug}', function(){
        return Inertia::render('Prototype/movie/show');
    })->name('movie.show');
});






Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
