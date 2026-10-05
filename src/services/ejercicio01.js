export const listaEstudiantes = [];

export const agregarEstudiante = (nombre, apellido, libreta) => {
    const nuevoEstudiante = {
        nombre: nombre,
        apellido: apellido,
        libreta: libreta
    };
    listaEstudiantes.push(nuevoEstudiante);
};