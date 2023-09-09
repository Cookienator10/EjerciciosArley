// Desarrollar en JavaScript un programa para la gestión reservas de un hotel,
// el cual, debe tener las siguientes características y consideraciones:
// • Un cliente puede reservar cualquier tipo de habitación: individual, doble y
// familiar.
// • Las habitaciones pueden ser para fumadores o no fumadores.
// • Las mascotas solo se aceptan en habitaciones familiares.
// • El hotel cuenta con 3 habitaciones de cada tipo.
// • No se puede exceder el número de personas por habitación: individual 2
// personas, 4 personas para doble y 6 personas para familiar.
// • El hotel necesita una estadística de las reservas: nombre de quien reserva,
// país de origen, número de personas, el periodo de la estadía, número de
// personas que están ocupando el hotel y si el huésped trajo mascota.

class Habitacion {
    constructor(tipo, fumador) {
      this.tipo = tipo;
      this.fumador = fumador;
      this.reservada = false;
      this.personas = 0;
      this.mascota = false;
    }
  
    reservar(personas, mascota) {
      if (!this.reservada && personas <= this.capacidadMaxima()) {
        this.reservada = true;
        this.personas = personas;
        this.mascota = mascota;
        console.log("Reserva exitosa");
      } else {
        console.log("No se puede realizar la reserva");
      }
    }
  
    capacidadMaxima() {
      if (this.tipo === "individual") {
        return 2;
      } else if (this.tipo === "doble") {
        return 4;
      } else if (this.tipo === "familiar") {
        return 6;
      }
    }
  }
  
  class Hotel {
    constructor() {
      this.habitaciones = {
        individual: [],
        doble: [],
        familiar: []
      };
      this.reservas = [];
    }
  
    agregarHabitacion(tipo, fumador) {
      const habitacion = new Habitacion(tipo, fumador);
      this.habitaciones[tipo].push(habitacion);
    }
  
    reservarHabitacion(tipo, personas, mascota) {
      const habitacionesDisponibles = this.habitaciones[tipo].filter(
        habitacion => !habitacion.reservada
      );
  
      if (habitacionesDisponibles.length > 0) {
        const habitacion = habitacionesDisponibles[0];
        habitacion.reservar(personas, mascota);
        this.reservas.push(habitacion);
      } else {
        console.log("No hay habitaciones disponibles de ese tipo");
      }
    }
  
    obtenerEstadisticas() {
      const totalReservas = this.reservas.length;
      const totalPersonas = this.reservas.reduce(
        (total, habitacion) => total + habitacion.personas,
        0
      );
      const totalMascotas = this.reservas.filter(
        habitacion => habitacion.mascota
      ).length;
  
      console.log("Estadísticas del hotel:");
      console.log("Total de reservas:", totalReservas);
      console.log("Total de personas:", totalPersonas);
      console.log("Total de mascotas:", totalMascotas);
    }
  }
  
  // Ejemplo de uso
  const hotel = new Hotel();
  
  hotel.agregarHabitacion("individual", false);
  hotel.agregarHabitacion("individual", true);
  hotel.agregarHabitacion("individual", false);
  hotel.agregarHabitacion("doble", false);
  hotel.agregarHabitacion("doble", true);
  hotel.agregarHabitacion("doble", false);
  hotel.agregarHabitacion("familiar", false);
  hotel.agregarHabitacion("familiar", true);
  hotel.agregarHabitacion("familiar", false);
  
  hotel.reservarHabitacion("individual", 1, false);
  hotel.reservarHabitacion("doble", 3, false);
  hotel.reservarHabitacion("familiar", 5, true);
  
  hotel.obtenerEstadisticas();