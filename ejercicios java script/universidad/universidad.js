// Construya un algoritmo con JavaScript” para las estadísticas de atención de una
// universidad teniendo en cuenta los siguientes requisitos:
// 1. Hay dos módulos de atención: terminal para llamada telefónica y oficina.
// 2. El sistema brinda las estadísticas de todo el proceso de atención:
// • Cantidad de usuarios atendidos.
// • Atendidos por día y especificación por segmento (Estudiante – docente) en
// cada uno de los módulos de atención.
// • Se permite trasferir de módulo de atención y se debe generar estadística de
// esta trasferencia.

// Definición de la clase Usuario
class Usuario {
   constructor(nombre, segmento) {
     this.nombre = nombre;
     this.segmento = segmento;
   }
 }
 
 // Definición de la clase ModuloAtencion
 class ModuloAtencion {
   constructor(nombre) {
     this.nombre = nombre;
     this.usuariosAtendidos = [];
     this.usuariosTransferidos = [];
   }
 
   // Método para atender a un usuario
   atenderUsuario(usuario) {
     this.usuariosAtendidos.push(usuario);
   }
 
   // Método para transferir a un usuario a otro módulo de atención
   transferirUsuario(usuario, otroModulo) {
     this.usuariosTransferidos.push(usuario);
     otroModulo.atenderUsuario(usuario);
   }
 
   // Método para obtener la cantidad de usuarios atendidos
   obtenerCantidadUsuariosAtendidos() {
     return this.usuariosAtendidos.length;
   }
 
   // Método para obtener la cantidad de usuarios transferidos
   obtenerCantidadUsuariosTransferidos() {
     return this.usuariosTransferidos.length;
   }
 
   // Método para obtener la cantidad de usuarios atendidos por segmento
   obtenerCantidadUsuariosAtendidosPorSegmento(segmento) {
     return this.usuariosAtendidos.filter(usuario => usuario.segmento === segmento).length;
   }
 }
 
 // Creación de los módulos de atención
 const moduloTerminal = new ModuloAtencion('Terminal para llamada telefónica');
 const moduloOficina = new ModuloAtencion('Oficina');
 
 // Creación de usuarios de ejemplo
 const usuario1 = new Usuario('Juan', 'Estudiante');
 const usuario2 = new Usuario('María', 'Docente');
 const usuario3 = new Usuario('Pedro', 'Estudiante');
 
 // Atender usuarios en los módulos de atención
 moduloTerminal.atenderUsuario(usuario1);
 moduloOficina.atenderUsuario(usuario2);
 moduloTerminal.atenderUsuario(usuario3);
 
 // Transferir usuario de un módulo a otro
 moduloTerminal.transferirUsuario(usuario1, moduloOficina);
 
 // Obtener estadísticas de atención
 console.log('Cantidad total de usuarios atendidos:', moduloTerminal.obtenerCantidadUsuariosAtendidos() + moduloOficina.obtenerCantidadUsuariosAtendidos());
 console.log('Cantidad de usuarios atendidos por segmento en el módulo Terminal:', moduloTerminal.obtenerCantidadUsuariosAtendidosPorSegmento('Estudiante'), 'estudiantes y', moduloTerminal.obtenerCantidadUsuariosAtendidosPorSegmento('Docente'), 'docentes');
 console.log('Cantidad de usuarios atendidos por segmento en el módulo Oficina:', moduloOficina.obtenerCantidadUsuariosAtendidosPorSegmento('Estudiante'), 'estudiantes y', moduloOficina.obtenerCantidadUsuariosAtendidosPorSegmento('Docente'), 'docentes');
 console.log('Cantidad de usuarios transferidos:', moduloTerminal.obtenerCantidadUsuariosTransferidos());