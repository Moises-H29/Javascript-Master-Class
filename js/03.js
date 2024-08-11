// Uso de const
//? Para valores que no van a cambiar
// Forma deprecada de crear variables en JS
const producto = 'Audifonos Gamer';  // Iniciar variable y asignarle valor

const disponible = true;  //! Con const no es posible iniciar variable sin valor

//! JavaScript es de tipado dinámico
// Guarda el tipo de dato en el valor que tiene la variable y no en la variable como en otros lenguajes (como en C)

// producto = true;  // Reasignando el valor de la variable

//! No podemos reasignar el valor si usamos const
disponible = true;

const producto1 = 'Computadora',
    disponible1 = true,
    categoria = 'Computadoras';

//! No se permite nombrar una variable con numeros al inicio

// const 1disponible;
// const -disponible = true;

//? Si pueden empezar con guion bajo

const _disponible = true;

//* Estilos para las variables

const nombre_producto = "Monitor HD";  // underscore
const nombreProducto = "Monitor HD"  // Camelcase
const NombreProducto = 'Monitor HD';  // Pascal Case
const nombreproducto = 'Monitor HD';

//? Las variables son Case Sensitive
