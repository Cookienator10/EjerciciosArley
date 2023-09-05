// Los sticker son etiquetas adhesivas diseñadas para ser pegadas en objetos, como lápices, libretas, cuadernos,
// pizarras, muebles, etc. Se utilizan para decorar y personalizar los productos de una manera barata y sencilla.
// Hacer un programa en JavaScript que cumpla los siguientes requisitos o características (programa básico-
// simulación)
// a. Se solicita al usuario el tamaño del stikers, pequeño o grande.
// • Costo pequeño es de 4000 y costo del grande 6000
// b. Se pide al usuario la cantidad de estikers teniendo en cuenta que solo se pueden enviar mínimo 10; Sino
// debe indicarse al usuario un numero correcto.
// c. El sistema debe arrojar cuanto es el costo total para paga

function stikers (tamaño, cantidad){
    return`Costo de los stickers: cantidad => ${cantidad} tiene un costi de ${cantidad * tamaño}`
}
alert (stikers(Number(prompt("1 pequeño 2 grande")) == 1? 4000:600, Number(prompt("ingresa la cantidad: "))));