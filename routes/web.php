<?php

use App\Http\Controllers\EventoController;
use App\Http\Controllers\UbicacionController;

Route::get('/api/eventos', [EventoController::class, 'index']);
Route::post('/api/eventos', [EventoController::class, 'store']);
Route::get('/api/ubicacion', [UbicacionController::class, 'obtenerUbicacion']);
