// POO

//* Object Literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

//* Object Constructor
function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

//? Prototype de Cliente

Cliente.prototype.formatearCliente = function() {
    return `El cliente se llama ${this.nombre} y se apellida ${this.apellido}`
}

function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}
//? El prototype nos permite crear funciones que solo se utilizan en un objeto en especifico

Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de $ ${this.precio}`
}

const producto2 = new Producto('Monitor de 49"', 800, true);
const producto3 = new Producto('Laptop', 300, false);
const producto4 = new Producto('Audifonos', 50, true);
const producto5 = new Producto('Celular', 200, true);

const cliente = new Cliente("Moises", "Hernandez Pacheco");

console.log(cliente);

//! Intentando formatear nuestro objeto SIN usar prototype nos hará escribir muchas funciones únicas para cada objeto
function formatearProducto(producto) {
    return `El producto ${producto.nombre} tiene un precio de $ ${producto.precio}`
}
console.log(producto2);
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

//console.log(formatearProducto(cliente));  //! Marca error porque formatearProducto() no esta diseñada para el objeto de tipo Cliente

console.log(cliente.formatearCliente());


