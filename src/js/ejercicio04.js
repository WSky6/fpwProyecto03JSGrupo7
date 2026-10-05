import { peliculas, filtrarPeliculas, filtrarPeliculasPorPuntaje } from '../services/serviceEjercicio04.js';

const boton = document.querySelector('#btnFiltrar');
const lista = document.querySelector('#listaPeliculas');
const listaPuntaje = document.querySelector('#listaPeliculasPuntaje');
const botonPuntaje = document.querySelector('#btnFiltrarPuntaje');

boton.addEventListener('click', (evento) => {
    evento.preventDefault();

    const generoSeleccionado = document.querySelector('#filtroGenero').value;

    const peliculasFiltradas = filtrarPeliculas(peliculas, generoSeleccionado);

    if (generoSeleccionado === "elección") {
        lista.innerHTML = '<li>Seleccione un género válido</li>';
        return;
    }

    peliculasFiltradas.forEach(pelicula => {
        lista.innerHTML += `<li>${pelicula.titulo}</li>`;
    });
});

botonPuntaje.addEventListener('click', (evento) => {
    evento.preventDefault();

    const puntajeSeleccionado = document.querySelector('#filtroPuntaje').value;

    const peliculasFiltradasPorPuntaje = filtrarPeliculasPorPuntaje(peliculas, puntajeSeleccionado);

    if (puntajeSeleccionado === "elección02") {
        listaPuntaje.innerHTML = '<li>Seleccione un puntaje válido</li>';
        return;
    }

    peliculasFiltradasPorPuntaje.forEach(pelicula => {
        listaPuntaje.innerHTML += `<li>${pelicula.titulo}</li>`;
    });
});