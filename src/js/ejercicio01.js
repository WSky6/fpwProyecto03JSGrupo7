import { agregarEstudiante, listaEstudiantes } from '../services/ejercicio01.js';

const mostrarDatos = () => {
    const valorNombre = document.querySelector("#Nombre").value;
    const valorApellido = document.querySelector("#Apellido").value;
    const valorLibreta = document.querySelector("#LibretaUniversitaria").value;

    if (valorNombre === "" || valorApellido === "" || valorLibreta === "") {
        alert("Por favor, completa todos los datos.");
        return;
    }

    agregarEstudiante(valorNombre, valorApellido, valorLibreta);

    document.querySelector("#cuerpo-tabla").innerHTML = listaEstudiantes.map((estudiante) => {
        return `
            <tr>
                <td>${estudiante.nombre}</td>
                <td>${estudiante.apellido}</td>
                <td>${estudiante.libreta}</td>
            </tr>
        `;
    }).join('');

    document.querySelector("#Nombre").value = "";
    document.querySelector("#Apellido").value = "";
    document.querySelector("#LibretaUniversitaria").value = "";
}

document.querySelector("#btnMostrar").addEventListener("click", mostrarDatos);

document.querySelector("#Nombre").addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");
});

document.querySelector("#Apellido").addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");
});

document.querySelector("#LibretaUniversitaria").addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
});