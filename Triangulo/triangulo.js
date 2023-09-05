// Para verificar si un triángulo es equilátero, se deben comprobar que los tres lados del triángulo tienen la misma
// longitud.
// a. Pedir al usuario los lados y determinar si es equilátero o no
const lado1 = parseFloat(prompt("Ingrese la longitud del lado 1:"));
const lado2 = parseFloat(prompt("Ingrese la longitud del lado 2:"));
const lado3 = parseFloat(prompt("Ingrese la longitud del lado 3:"));

if (lado1 === lado2 && lado2 === lado3) {
  document.write("El triángulo es equilátero.");
} else {
  document.write("El triángulo no es equilátero.");
}