import { randomColor } from '../services/ejercicio02.js';

const boton = document.querySelector('#cambiarColor');
boton.addEventListener('click', (evento) => {
    evento.preventDefault();
    randomColor();
});