// Classes

class Producto {
    constructor(nombre, precio, disponible) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de $ ${this.precio}`;
    }
    precioProducto() {
        console.log(this.precio);
    }
}

const producto2 = new Producto('Monitor de 49"', 800, true);
const producto3 = new Producto('Laptop', 300, false);


//? Herencia

class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }
    precioProducto() {
        super.precioProducto();
        console.log("Y si hay en existencia");
    }
}

const libro = new Libro('La Odisea', 300, '987654321');

console.log(libro.formatearProducto());
libro.precioProducto();
console.log(producto2.formatearProducto());