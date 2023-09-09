
// Desarrollar en JavaScript los siguientes algoritmos que den solución a la problemática
// planteada.
// Implementar una clase en JavaScript, la cual tenga los siguientes atributos y métodos.
// Atributos:
// ● Código.
// ● Descripción.
// ● Precio de compra.
// ● Precio de venta.
// ● Cantidad en bodega.
// ● Cantidad mínima requerida en bodega.
// ● Cantidad máxima de inventario permitida.
// ● Porcentaje de Descuento.
// Métodos:
// ● Solicitar pedido: devuelva true si debe solicitar el producto al proveedor y false en
// caso contrario.
// ● Calcular total a pagar: devuelva la cantidad total a pagar al proveedor dado una
// cantidad de unidades de compra.
// Adicionalmente se desea dos subclases para los siguientes tipos de productos:
// ● Prendas de vestir (como lo son blusas, jeans, camisas, etc.) el cual debe tener los
// siguientes parámetros adicionales:
// ○ Talla: S, M, L, etc.
// ○ Permite planchado: verdadero o falso.
// ● Calzado (como lo son tenis, calzado formal, sandalias, etc.) el cual debe tener el
// siguiente parámetro adicional:
// ○ Talla: 35, 36, 37, etc.
// Diseñar un programa que:
// ● Consulte el número de productos de tipo de prendas de vestir a manejar.
// ● Consulte el número de productos de tipo calzado a manejar.
// ● Cree en una estructura de datos (arrays, map, set), los productos de prendas de
// vestir en el cual se guardarán las instancias de cada uno de ellos.
// ● Cree una estructura de datos (arrays, map, set) de productos de calzado en el cual
// se guardarán las instancias de cada uno de ellos.
class Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento) {
      this.codigo = codigo;
      this.descripcion = descripcion;
      this.precioCompra = precioCompra;
      this.precioVenta = precioVenta;
      this.cantidadBodega = cantidadBodega;
      this.cantidadMinima = cantidadMinima;
      this.cantidadMaxima = cantidadMaxima;
      this.porcentajeDescuento = porcentajeDescuento;
    }
  
    solicitarPedido() {
      return this.cantidadBodega < this.cantidadMinima;
    }
  
    calcularTotalPagar(cantidadUnidades) {
      return cantidadUnidades * this.precioCompra;
    }
  }
  
  class PrendaVestir extends Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento, talla, permitePlanchado) {
      super(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento);
      this.talla = talla;
      this.permitePlanchado = permitePlanchado;
    }
  }
  
  class Calzado extends Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento, talla) {
      super(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento);
      this.talla = talla;
    }
  }
  
  // Ejemplo de uso:
  
  // Crear productos de prendas de vestir
  const prendas = [
    new PrendaVestir("P001", "Blusa", 20, 40, 10, 5, 20, 0.1, "M", true),
    new PrendaVestir("P002", "Jeans", 30, 60, 15, 8, 25, 0.2, "L", false),
    // Agrega más productos de prendas de vestir aquí
  ];
  
  // Crear productos de calzado
  const calzado = [
    new Calzado("C001", "Tenis", 50, 100, 8, 4, 15, 0.15, 40),
    new Calzado("C002", "Calzado formal", 80, 160, 12, 6, 18, 0.25, 42),
    // Agrega más productos de calzado aquí
  ];
  
  // Consultar el número de productos de prendas de vestir y calzado
  const numPrendas = prendas.length;
  const numCalzado = calzado.length;
  
  console.log("Número de productos de prendas de vestir:", numPrendas);
  console.log("Número de productos de calzado:", numCalzado);