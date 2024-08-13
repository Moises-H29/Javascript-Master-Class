// Objetos

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}


// Forma anterior
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);


//! Destructuring de Objetos (también funciona para arrays)

// const {precio} = producto;  //* Crea la variable "precio" y extrae el valor de "producto" y lo asigna a la variable
// const {nombreProducto} = producto;

const {precio, nombreProducto} = producto;  //* Saca ambas variables

console.log(precio);
console.log(nombreProducto);


