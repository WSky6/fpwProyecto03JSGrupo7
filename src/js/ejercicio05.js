const carrito = [
  { producto: "Notebook", precio: 800000, enStock: true },
  { producto: "Mouse", precio: 15000, enStock: false },
  { producto: "Teclado", precio: 30000, enStock: true },
  { producto: "Monitor", precio: 200000, enStock: true }
];

const btnTotal = document.querySelector("#btnTotal");
const total = document.querySelector("#total");
const detalle = document.querySelector("#detalle");

btnTotal.addEventListener("click", () => {
  const enStock = carrito.filter(item => item.enStock === true);

  const precios = enStock.map(item => item.precio);

  const totalPagar = precios.reduce((acumulador, precio) => acumulador + precio, 0);

  total.textContent = `Total: $${totalPagar.toLocaleString("es-AR")}`;
  detalle.textContent = `Se compraron ${enStock.length} productos`;
});