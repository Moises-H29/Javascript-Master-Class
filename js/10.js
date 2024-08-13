// Objetos

const nombreProducto = "Monitor 20 Pulgadas";
const precio = 300;
const disponible = true;

//* Con los objetos no tendremos que crear estas tres variables, solamente una

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

console.log(producto);

console.log(producto.precio);
console.log(producto.nombreProducto);
console.log(producto.disponible);

console.log(producto['precio']);  // Sintaxis alternativa para acceder a las propiedades del objeto 'producto'