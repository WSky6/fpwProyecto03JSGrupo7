import { productosIVA, mostrarProductos, productos } from "../services/serviceEjercicio03.js";


const boton = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");
const listaProductos = document.querySelector("#listaProductos");

listaProductos.innerHTML = productos.map((producto, index) =>
    `<li>Producto ${index + 1}: <strong>${producto.nombre}</strong> - $${producto.precio}</li>`).join("");

boton.addEventListener("click", () => {

    const productosConIVA = productosIVA(productos);
    mostrarProductos(productosConIVA, resultado);

    
});