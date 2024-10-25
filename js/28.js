// Classes

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(producto) {
        return `El producto ${this.nombre} tiene un precio de $ ${this.precio}`;
    }
    precioProducto(producto) {
        return this.precio;
    }
}

const producto2 = new Producto('Monitor de 49"', 800, true);
const producto3 = new Producto('Laptop', 300, false);

console.log(producto2);
console.log(producto3);
console.log(producto2.formatearProducto());
console.log(producto2.precioProducto());