// a biblioteca municipal de Armenia, necesita un sistema de Gestión de multas. Hacer un programa en JavaScript
// que cumpla los siguientes requisitos o características (programa básico-simulación):
// a. Se pregunta al usuario si es devolución o perdida.
// b. Se le pide al usuario de la biblioteca que indique la cantidad de días de retraso.
// c. La cantidad de libros prestados o revistas
// • Revistas 500 pesos día.
// • Libro 600 pesos día.
// d. Si es perdida, debe de pagar 10000 por ejemplar

const opcion = prompt("¿Es devolución o pérdida?");
const diasRetraso = parseInt(prompt("Ingrese la cantidad de días de retraso:"));
const cantidadLibros = parseInt(prompt("Ingrese la cantidad de libros prestados:"));
const cantidadRevistas = parseInt(prompt("Ingrese la cantidad de revistas prestadas:"));

const calcularMultas = () => {
  let multaLibros = cantidadLibros * 600 * diasRetraso;
  let multaRevistas = cantidadRevistas * 500 * diasRetraso;

  if (opcion === "pérdida") {
    let multaPerdida = (cantidadLibros + cantidadRevistas) * 1000;
    multaLibros += multaPerdida;
  }

  document.write("Multa por libros: $" + multaLibros);
  document.write("Multa por revistas: $" + multaRevistas);
};

