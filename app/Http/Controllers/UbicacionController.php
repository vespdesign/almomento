<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class UbicacionController extends Controller
{
    public function obtenerUbicacion(Request $request)
    {
        $ip = $request->ip();
        $response = Http::get("http://ip-api.com/json/{$ip}");

        if ($response->successful()) {
            $data = $response->json();
            return response()->json([
                'latitud' => $data['lat'],
                'longitud' => $data['lon'],
            ]);
        } else {
            return response()->json(['error' => 'No se pudo obtener la ubicación'], 500);
        }
    }
}
