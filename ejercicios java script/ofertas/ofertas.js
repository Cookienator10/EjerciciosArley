// Una subasta o remate es una venta organizada basado en la competencia directa, y
// generalmente pública, es decir, a aquel comprador que pague la mayor cantidad de
// dinero o de bienes a cambio del producto.
// Hacer en JavaScript una simulación de subasta que cumpla con las siguientes
// características:
// 1. Se podrá registrar los productos a subastar almacenados (id del producto, nombre
// del producto, fecha y precio inicial de subasta).
// 2. Cada persona puede pujar por el producto que desea, indicando la fecha, el
// producto y el valor ofrecido.
// 3. Se puede ver la lista de productos registrados.
// 4. La lista de ofertas por producto.
// 5. Seleccionar una oferta ganadora
class Producto {
  constructor(id, nombre, fecha, precioInicial) {
    this.id = id;
    this.nombre = nombre;
    this.fecha = fecha;
    this.precioInicial = precioInicial;
    this.ofertas = [];
  }

  // Método para registrar una oferta
  registrarOferta(fecha, valorOfrecido) {
    this.ofertas.push({ fecha, valorOfrecido });
  }

  // Método para obtener la oferta ganadora
  obtenerOfertaGanadora() {
    let ofertaGanadora = null;
    let mayorValor = this.precioInicial;

    for (let oferta of this.ofertas) {
      if (oferta.valorOfrecido > mayorValor) {
        mayorValor = oferta.valorOfrecido;
        ofertaGanadora = oferta;
      }
    }

    return ofertaGanadora;
  }
}

// Definir la clase Subasta
class Subasta {
  constructor() {
    this.productos = [];
  }

  // Método para registrar un producto
  registrarProducto(id, nombre, fecha, precioInicial) {
    const producto = new Producto(id, nombre, fecha, precioInicial);
    this.productos.push(producto);
  }

  // Método para registrar una oferta por un producto
  registrarOferta(idProducto, fecha, valorOfrecido) {
    const producto = this.productos.find((producto) => producto.id === idProducto);

    if (producto) {
      producto.registrarOferta(fecha, valorOfrecido);
    } else {
      console.log("El producto no existe.");
    }
  }

  // Método para obtener la lista de productos registrados
  obtenerListaProductos() {
    return this.productos;
  }

  // Método para obtener la lista de ofertas por producto
  obtenerListaOfertas(idProducto) {
    const producto = this.productos.find((producto) => producto.id === idProducto);

    if (producto) {
      return producto.ofertas;
    } else {
      console.log("El producto no existe.");
      return [];
    }
  }

  // Método para seleccionar la oferta ganadora de un producto
  seleccionarOfertaGanadora(idProducto) {
    const producto = this.productos.find((producto) => producto.id === idProducto);

    if (producto) {
      const ofertaGanadora = producto.obtenerOfertaGanadora();

      if (ofertaGanadora) {
        console.log("La oferta ganadora es:");
        console.log(ofertaGanadora);
      } else {
        console.log("No se recibieron ofertas para este producto.");
      }
    } else {
      console.log("El producto no existe.");
    }
  }
}

// Ejemplo de uso
const subasta = new Subasta();

// Registrar productos
subasta.registrarProducto(1, "Producto 1", "2023-09-09", 100);
subasta.registrarProducto(2, "Producto 2", "2023-09-09", 200);

// Registrar ofertas
subasta.registrarOferta(1, "2023-09-09", 150);
subasta.registrarOferta(1, "2023-09-09", 200);
subasta.registrarOferta(2, "2023-09-09", 250);

// Obtener lista de productos
const listaProductos = subasta.obtenerListaProductos();
console.log("Lista de productos:");
console.log(listaProductos);

// Obtener lista de ofertas por producto
const listaOfertas = subasta.obtenerListaOfertas(1);
console.log("Lista de ofertas para el producto 1:");
console.log(listaOfertas);

// Seleccionar oferta ganadora
subasta.seleccionarOfertaGanadora(1);