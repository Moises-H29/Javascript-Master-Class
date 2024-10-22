// POO

//* Object Literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

//* Object Constructor

function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const producto2 = new Producto('Monitor de 49"', 800, true);
const producto3 = new Producto('Laptop', 300, false);
const producto4 = new Producto('Audifonos', 50, true);
const producto5 = new Producto('Celular', 200, true);

console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);