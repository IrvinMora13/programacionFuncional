const fs = require('fs');

const productos = [];

for (let i = 1; i <= 80; i++) {
  const producto = {
    clave: `00${i}`,
    descripcion: `Producto ${i}`,
    precio: parseFloat((10 + Math.random() * 50).toFixed(2)),
    clasificacion: `Clase ${i % 4}`,
    existencia: Math.floor(5 + Math.random() * 50),
    existenciaMinima: 5,
    existenciaMaxima: 100,
  };
  productos.push(producto);
}

const productosJSON = JSON.stringify(productos, null, 2);

fs.writeFileSync('productos.json', productosJSON, 'utf-8');

console.log("Archivo 'productos.json' creado con 80 productos ficticios.");
