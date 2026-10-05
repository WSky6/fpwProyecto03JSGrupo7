export { productosIVA, mostrarProductos, productos };

const productos = [
  { nombre: "Coca", precio: 1000 },
  { nombre: "Pan", precio: 500 },
  { nombre: "Leche", precio: 1200 }
];

const productosIVA = (productos) => {
    return productos.map(producto => ({
        nombre: producto.nombre,
        precioFinal: producto.precio * 1.21
    }));
};

const mostrarProductos = (productos, lista) => {
    lista.innerHTML = productos.map((producto, index)=>
    `<li>Productos ${index + 1}: <strong>${producto.nombre}</strong> - $${producto.precioFinal}</li>`).join("");
};