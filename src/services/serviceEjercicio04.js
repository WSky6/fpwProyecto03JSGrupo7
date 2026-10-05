
export const peliculas = [
  { titulo: "Rápidos y Furiosos", genero: "Acción", puntaje: 8 },
  { titulo: "Son como niños", genero: "Comedia", puntaje: 6 },
  { titulo: "El Padrino", genero: "Drama", puntaje: 10 },
  { titulo: "Jhon Wick", genero: "Acción", puntaje: 9 }
];

export const filtrarPeliculas = (peliculas, genero) => {
  if (genero === "todos") {
    return peliculas;
  }
  return peliculas.filter(pelicula => pelicula.genero === genero);
}

export const filtrarPeliculasPorPuntaje = (peliculas, puntaje) => {
  if (puntaje === "todos") {
    return peliculas;
  }
  return peliculas.filter(pelicula => pelicula.puntaje >= parseInt(puntaje));
}