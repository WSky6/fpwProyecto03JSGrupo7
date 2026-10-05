import { productosIVA, mostrarProductos, productos } from "../services/serviceEjercicio03.js";


const boton = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");

boton.addEventListener("click", () => {

    const productosConIVA = productosIVA(productos);
    mostrarProductos(productosConIVA, resultado);
});