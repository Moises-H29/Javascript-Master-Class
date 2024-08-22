const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

const medidas = {
    peso : '1kg',
    medida : '1m'
}

const nuevoProducto = { ...producto, ...medidas };  // Spread operator para unir objetos y arreglos

console.log(producto);
console.log(nuevoProducto);