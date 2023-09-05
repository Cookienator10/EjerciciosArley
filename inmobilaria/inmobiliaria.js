// La inmobiliaria “Sucasa” es una empresa dedicada a la compraventa de casas. Hacer un programa en JavaScript
// que cumpla los siguientes requisitos o características (programa básico-simulación):
// a. Solicitar al usuario el costo de la casa.
// b. Solicitar al usuario el ingreso del tipo de inmueble (1. Usado 2. Nuevo)
// c. Calcular la comisión de la inmobiliaria en la venta así:
// • Si es usado, tiene el 10% de comisión basado en el costo de la vivienda.
// • Si es nuevo, tiene el 12% de la comisión basado en el costo de la vivienda.
// d. El sistema debe mostrar al usuario cuanto es el valor que recibe el propietario y cuanto es el valor recibido
// por la inmobiliaria.

let costo = parseInt(prompt("Ingrese costo del inmueble"));
let tipoinmueble = prompt("Ingrese el tipo de inmueble \n1. Usado\n2. Nuevo");


function ventas (precioOriginal, descuento){
    const preciocondescuento = precioOriginal *( 1 - descuento);
return preciocondescuento;
}

if(tipoinmueble === "1") {

const descuentoinmuebleusado = 0.10;
const preciocondescuentousado = ventas(costo, descuentoinmuebleusado);
document.write ("Precio con descuento inmueble usado:", preciocondescuentousado)
const valorrecibidopropietario = preciocondescuentousado;
document.write ("Valor recibido por el propietario", valorrecibidopropietario);
const precioinmobiliaria = costo - preciocondescuentousado;
  document.write("Precio para la empresa:", precioinmobiliaria);
} else if (tipoinmueble === "2") {
    const descuentoinmueblenuevo = 0.12;
    const preciocondescuentonuevo = ventas(costo, descuentoinmueblenuevo);
    document.write ("Precio con descuento inmueble usado:", preciocondescuentonuevo)
    const valorrecibidopropietario = preciocondescuentonuevo;
    document.write ("Valor recibido por el propietario", valorrecibidopropietario);  
    const precioinmobiliaria = costo - preciocondescuentonuevo;
  document.write("Precio para la inmobiliaria:", precioinmobiliaria);
}else {
    document.write("Opcion invalida por facor ingrese 1 para usado o 2 para nuevo.");
}

