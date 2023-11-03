class Producto {
    constructor(clave, descripcion, precio, clasificacion, existencia, existenciaMinima, existenciaMaxima) {
      this.clave = clave;
      this.descripcion = descripcion;
      this.precio = precio;
      this.clasificacion = clasificacion;
      this.existencia = existencia;
      this.existenciaMinima = existenciaMinima;
      this.existenciaMaxima = existenciaMaxima;
    }
  }
//Crear DAO
const fs = require('fs');

class ProductoDAO {
  constructor() {
    this.productos = [];
  }

  cargarProductosDesdeArchivo(archivo) {
    const data = fs.readFileSync(archivo, 'utf-8');
    this.productos = JSON.parse(data);
  }
}
const dao = new ProductoDAO();
dao.cargarProductosDesdeArchivo('productos.json');
// 1
const productosConExistenciaMayor20 = dao.productos.filter(producto => producto.existencia > 20);
console.log("Productos con existencia mayor a 20:", productosConExistenciaMayor20.length);
// 2
const productosConExistenciaMenos15 = dao.productos.filter(producto => producto.existencia < 15);
console.log("Productos con existencia menos a 15:", productosConExistenciaMenos15.length);
// 3
const productosMismaClasificacionPrecioMayor15 = dao.productos.filter(producto => producto.clasificacion === 'tu_clasificacion' && producto.precio > 15.50);
console.log("Productos con misma clasificación y precio mayor a 15.50:", productosMismaClasificacionPrecioMayor15);
// 4
const productosPrecioEntre20y45 = dao.productos.filter(producto => producto.precio > 20.30 && producto.precio < 45.00);
console.log("Productos con precio entre 20.30 y 45.00:", productosPrecioEntre20y45);
// 5
const productosAgrupadosPorClasificacion = dao.productos.reduce((acumulador, producto) => {
  acumulador[producto.clasificacion] = (acumulador[producto.clasificacion] || 0) + 1;
  return acumulador;
}, {});
console.log("Número de productos agrupados por clasificación:", productosAgrupadosPorClasificacion);
