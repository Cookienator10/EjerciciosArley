// Lavan Ya” es un servicio de limpieza en el que los clientes envían sus prendas para que se laven y se planchen
// en un lugar determinado. Hacer un programa en JavaScript que cumpla los siguientes requisitos o características
// (programa básico-simulación):
// a. El cliente escoge entre dos servicios: lavado o planchado.
// b. Si es lavado, se solicita el tipo de lavado 1. En seco o 2. Normal
// c. Se solicita la cantidad de prendas.
// d. Se calcula el costo de los servicios teniendo en cuenta la lista de precios:
// • Lavado en seco: 2000 por prenda
// • Lavado normal: 1500 por prenda
// • Planchado: 1800 por prenda
// e. Adicional se cobra un domicilio de 3000 solo si es planchado; para otros servicios es gratis.

const precioLavadoSeco = 2000;
const precioLavadoNormal = 1500;
const precioPlanchado = 1000;

const tipoServicio = parseInt(prompt("Seleccione el tipo de servicio: 1. Lavado en seco, 2. Lavado normal, 3. Planchado"));
const cantidadPrendas = parseInt(prompt("Ingrese la cantidad de prendas"));

let costoTotal = 0;

if (tipoServicio === 1) {
  costoTotal = cantidadPrendas * precioLavadoSeco;
} else if (tipoServicio === 2) {
  costoTotal = cantidadPrendas * precioLavadoNormal;
} else if (tipoServicio === 3) {
  costoTotal = cantidadPrendas * precioPlanchado;
}

const resultadoElement = document.createElement("p");
resultadoElement.textContent = `El costo total es: $${costoTotal}`;
document.body.appendChild(resultadoElement);