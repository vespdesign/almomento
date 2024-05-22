<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Evento;
use Carbon\Carbon;

class EliminarEventosExpirados extends Command
{
    protected $signature = 'eventos:eliminar-expirados';
    protected $description = 'Elimina los eventos que han expirado';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $now = Carbon::now();
        $expirados = Evento::where('tiempo_expiracion', '<', $now)->delete();
        $this->info('Eventos expirados eliminados');
    }
}
