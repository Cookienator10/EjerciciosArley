
// Se necesita simular en JavaScript la atención de clientes a través de la asignación de
// turnos en un banco. Se debe usar arreglos o objetos dependiendo del algoritmo que
// diseñe. Y tener en cuenta las siguientes restricciones y requisitos.
// • Hay tres tipos de clientes: cliente preferencial, cliente general y cliente que no
// tiene cuenta en el banco
// • Hay dos tipos de atención: caja o asesoría.
// • Los de atención de caja se clasifican en depósitos y retiros.
// • El banco cuenta con 5 cajas, de las cuales la 1 y 2 están reservadas para retiros.
// • Aquellos clientes presenciales se atienden primero de los demás tipos.
// • La caja 5 es solo asesoría.
// • A medida que se atienden clientes se va liberando las cajas y distribuyendo entre
// los usuarios de las colas.

// Definimos la clase Cliente
class Cliente {
    constructor(nombre, tipo) {
      this.nombre = nombre;
      this.tipo = tipo;
    }
  }
  
  // Definimos la clase Turno
  class Turno {
    constructor(cliente, tipoAtencion) {
      this.cliente = cliente;
      this.tipoAtencion = tipoAtencion;
    }
  }
  
  // Creamos los objetos de los clientes
  const cliente1 = new Cliente("Cliente 1", "preferencial");
  const cliente2 = new Cliente("Cliente 2", "general");
  const cliente3 = new Cliente("Cliente 3", "sin cuenta");
  
  // Creamos los objetos de los turnos
  const turno1 = new Turno(cliente1, "caja");
  const turno2 = new Turno(cliente2, "asesoría");
  const turno3 = new Turno(cliente3, "caja");
  
  // Creamos los arreglos para las colas de atención
  const colaCaja = [];
  const colaAsesoria = [];
  
  // Agregamos los turnos a las colas correspondientes
  colaCaja.push(turno1);
  colaAsesoria.push(turno2);
  colaCaja.push(turno3);
  
  // Simulamos la atención de los clientes
  function atenderClientes() {
    // Verificamos si hay clientes en la cola de caja
    if (colaCaja.length > 0) {
      // Atendemos al primer cliente de la cola de caja
      const turnoCaja = colaCaja.shift();
      console.log(`Atendiendo a ${turnoCaja.cliente.nombre} en caja (${turnoCaja.tipoAtencion})`);
    } else if (colaAsesoria.length > 0) {
      // Atendemos al primer cliente de la cola de asesoría
      const turnoAsesoria = colaAsesoria.shift();
      console.log(`Atendiendo a ${turnoAsesoria.cliente.nombre} en asesoría (${turnoAsesoria.tipoAtencion})`);
    } else {
      console.log("No hay clientes en espera");
    }
  }
  
  // Ejecutamos la simulación
  atenderClientes();
  atenderClientes();
  atenderClientes();