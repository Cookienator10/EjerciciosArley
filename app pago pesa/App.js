 function calcularPago() {
      const tipoPago = document.getElementById("tipoPago").value;
      const montoIngresado = parseInt(document.getElementById("montoIngresado").value);

      const monedasAceptadas = [500, 1000];
      const billetesAceptados = [2000, 5000];

      const costoServicio = 500;

      if (tipoPago === "moneda") {
        if (monedasAceptadas.includes(montoIngresado)) {
          if (montoIngresado >= costoServicio) {
            const devolucion = montoIngresado - costoServicio;
            alert("Gracias por su pago. Su devolución es de " + devolucion + " pesos.");
          } else {
            const faltaDinero = costoServicio - montoIngresado;
            alert("Monto insuficiente. Faltan " + faltaDinero + " pesos para cubrir el costo del servicio.");
          }
        } else {
          alert("Moneda no válida. Solo se aceptan monedas de 500 y 1000 pesos.");
        }
      }
      else if (tipoPago === "billete") {
        if (billetesAceptados.includes(montoIngresado)) {
          if (montoIngresado >= costoServicio) {
            const devolucion = montoIngresado - costoServicio;
            alert("Gracias por su pago. Su devolución es de " + devolucion + " pesos.");
          } else {
            const faltaDinero = costoServicio - montoIngresado;
            alert("Monto insuficiente. Faltan " + faltaDinero + " pesos para cubrir el costo del servicio.");
          }
        } else {
          alert("Billete no válido. Solo se aceptan billetes de 2000 y 5000 pesos.");
        }
      }
      // Si el tipo de pago no es válido
      else {
        alert("Tipo de pago no válido. Por favor, seleccione 'moneda' o 'billete'.");
      }
    }