import React, { useState } from 'react';
import axios from '../api/axiosConfig';

const FormularioEvento = ({ latitud, longitud, onEventoCreado }) => {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleNuevoEvento = async (evento) => {
        try {
            const tiempoExpiracion = new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString().slice(0, 19).replace('T', ' '); // Ajusta automáticamente a 4 horas después de la fecha actual
            const eventoData = {
                ...evento,
                latitud,
                longitud,
                tiempo_expiracion: tiempoExpiracion
            };
            await axios.post('/api/eventos', eventoData);
            alert("Evento añadido con éxito");
            onEventoCreado(); // Actualiza la lista de eventos y mueve el marcador
            setTitulo(''); // Limpiar el campo de título
            setDescripcion(''); // Limpiar el campo de descripción
        } catch (error) {
            console.error("Hubo un error al añadir el evento:", error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevoEvento = {
            titulo,
            descripcion,
            latitud,
            longitud
        };
        handleNuevoEvento(nuevoEvento);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Título:</label>
                <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
            </div>
            <div>
                <label>Descripción:</label>
                <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            </div>
            <div>
                <label>Latitud:</label>
                <input type="text" value={latitud} readOnly />
            </div>
            <div>
                <label>Longitud:</label>
                <input type="text" value={longitud} readOnly />
            </div>
            <button type="submit">Crear Evento</button>
        </form>
    );
};

export default FormularioEvento;
