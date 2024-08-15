// "use strict";  //! Ejecuta el código de JavaScript de forma estricta para seguir buenas practicas
// Object Methods

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

// Object.freeze(producto);  // No permite agregar, modificar ni eliminar propiedades de un objeto

// producto.imagen = 'imagen.jpg';

// console.log(Object.isFrozen(producto));

// delete producto.precio;

Object.seal(producto);  // La diferencia con .freeze es que si deja modificar las propiedades existentes

producto.imagen = 'imagen.jpg';
producto.precio = 200;

console.log(producto);