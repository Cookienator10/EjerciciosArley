// El software que se desarrollará controlará un cajero automático (ATM) a través de una
// simulación usando el lenguaje de programación JavaScript.
// • El cajero automático atenderá a un cliente a la vez. Se le pedirá al cliente
// que inserte su documento de identidad y su pin de 4 dígitos, los cuales se
// enviarán al banco para su validación como parte de cada transacción. El
// cliente podrá entonces realizar una o más transacciones. El menú se
// mostrará en la consola hasta que el cliente indique que no desea realizar
// más transacciones.
// • El cajero automático debe ser capaz de proporcionar los siguientes servicios
// al cliente:
// • Un cliente debe poder realizar un retiro de efectivo de cualquier cuenta
// adecuada vinculada al documento de identidad, en múltiplos de $50000. Se
// debe obtener la aprobación del banco antes de entregar efectivo.
// • Un cliente debe poder realizar un depósito en cualquier cuenta vinculada al
// documento de identidad, consistente en efectivo y/o cheques. El cliente
// ingresará el monto del depósito en el cajero automático e indicar si es
// efectivo o cheque.
// • Un cliente debe poder realizar una transferencia de dinero entre dos
// cuentas cualesquiera vinculadas a al documento de identidad.
// • Un cliente debe poder realizar una consulta de saldo de cualquier cuenta
// vinculada al documento de identidad.
// • El cajero automático comunicará al cliente los resultados de cada
// transacción dependiendo de su tipo. Ejemplo “retiro exitoso, puede tomar x
// dinero de la bandeja principal”
// • Si el banco determina que el PIN del cliente no es válido, se le pedirá al
// cliente que vuelva a ingresar el PIN antes de que se pueda continuar con la
// transacción. Si el cliente no puede ingresar correctamente el PIN después
// de tres intentos saldrá de la aplicación.
// • El cajero automático tendrá un panel de operador con un interruptor que
// permitirá apagar o encender el cajero
let clienteActual = null;
let intentosPin = 0;
let cajeroEncendido = true;

// Clase Cliente
class Cliente {
  constructor(documento, pin) {
    this.documento = documento;
    this.pin = pin;
    this.cuentas = [];
  }
}

// Clase Cuenta
class Cuenta {
  constructor(numero, saldo) {
    this.numero = numero;
    this.saldo = saldo;
  }
}

// Función para validar el PIN del cliente
function validarPin(pin) {
  if (pin === clienteActual.pin) {
    return true;
  } else {
    intentosPin++;
    if (intentosPin >= 3) {
      console.log("PIN incorrecto. Se ha excedido el número máximo de intentos.");
      clienteActual = null;
    } else {
      console.log("PIN incorrecto. Por favor, inténtelo nuevamente.");
    }
    return false;
  }
}

// Función para realizar un retiro de efectivo
function realizarRetiro(cuenta, monto) {
  if (monto % 50000 !== 0) {
    console.log("El monto debe ser múltiplo de $50000.");
    return;
  }

  // Lógica para obtener aprobación del banco y entregar efectivo
  console.log(`Retiro exitoso. Puede tomar $${monto} de la bandeja principal.`);
}

// Función para realizar un depósito
function realizarDeposito(cuenta, monto, tipo) {
  // Lógica para realizar el depósito en la cuenta especificada
  console.log(`Depósito exitoso. Se ha depositado $${monto} en la cuenta ${cuenta.numero}.`);
}

// Función para realizar una transferencia de dinero
function realizarTransferencia(cuentaOrigen, cuentaDestino, monto) {
  // Lógica para transferir el monto especificado de la cuenta origen a la cuenta destino
  console.log(`Transferencia exitosa. Se ha transferido $${monto} de la cuenta ${cuentaOrigen.numero} a la cuenta ${cuentaDestino.numero}.`);
}

// Función para consultar el saldo de una cuenta
function consultarSaldo(cuenta) {
  console.log(`El saldo de la cuenta ${cuenta.numero} es $${cuenta.saldo}.`);
}

// Función principal para el cajero automático
function cajeroAutomatico() {
  if (!cajeroEncendido) {
    console.log("El cajero automático está apagado. No se pueden realizar transacciones.");
    return;
  }

  // Lógica para solicitar documento de identidad y PIN al cliente
  const documento = prompt("Por favor, ingrese su documento de identidad:");
  const pin = prompt("Por favor, ingrese su PIN de 4 dígitos:");

  // Validar PIN y obtener cliente actual
  if (clienteActual === null) {
    clienteActual = new Cliente(documento, pin);
  } else if (!validarPin(pin)) {
    return;
  }

  // Lógica para mostrar menú y realizar transacciones
  let opcion;
  do {
    opcion = prompt(`Bienvenido, ${clienteActual.documento}. Por favor, seleccione una opción:
    1. Retiro de efectivo
    2. Depósito
    3. Transferencia
    4. Consultar saldo
    5. Salir`);

    switch (opcion) {
      case "1":
        const cuentaRetiro = prompt("Ingrese el número de cuenta para el retiro:");
        const montoRetiro = parseInt(prompt("Ingrese el monto a retirar:"));
        realizarRetiro(cuentaRetiro, montoRetiro);
        break;
      case "2":
        const cuentaDeposito = prompt("Ingrese el número de cuenta para el depósito:");
        const montoDeposito = parseInt(prompt("Ingrese el monto a depositar:"));
        const tipoDeposito = prompt("Ingrese el tipo de depósito (efectivo o cheque):");
        realizarDeposito(cuentaDeposito, montoDeposito, tipoDeposito);
        break;
      case "3":
        const cuentaOrigen = prompt("Ingrese el número de cuenta origen:");
        const cuentaDestino = prompt("Ingrese el número de cuenta destino:");
        const montoTransferencia = parseInt(prompt("Ingrese el monto a transferir:"));
        realizarTransferencia(cuentaOrigen, cuentaDestino, montoTransferencia);
        break;
      case "4":
        const cuentaSaldo = prompt("Ingrese el número de cuenta para consultar el saldo:");
        // Buscar la cuenta en el cliente actual
        const cuentaEncontrada = clienteActual.cuentas.find(cuenta => cuenta.numero === cuentaSaldo);
        if (cuentaEncontrada) {
          consultarSaldo(cuentaEncontrada);
        } else {
          console.log("La cuenta especificada no existe.");
        }
        break;
      case "5":
        console.log("Gracias por utilizar nuestro cajero automático. Hasta luego.");
        clienteActual = null;
        break;
      default:
        console.log("Opción inválida. Por favor, seleccione una opción válida.");
        break;
    }
  } while (opcion !== "5");
}

// Ejecutar el cajero automático
cajeroAutomatico();
