    let opcion = parseInt(prompt("Menú de opciones:\n1. Pizza\n2. Sándwiches\n3. Ensaladas\nSeleccione una opción:"));

    let cantidad = parseInt(prompt("Ingrese la cantidad de porciones:"));

    let costoTotal = 0;

    if (opcion === 1) {
      costoTotal = cantidad * 7000;
    } else if (opcion === 2) {
      costoTotal = cantidad * 5000;
    } else if (opcion === 3) {
      costoTotal = cantidad * 8000;
    }

    document.write(`<p>El costo total es: ${costoTotal} pesos</p>`)