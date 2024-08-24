//* Arrays o Arreglos

const numeros = [10, 20, 30, 40, 50];




// //? Acceder a los valores de un arreglo
// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);

// //? Conocer la extensión de un arreglo
// console.log(meses.length);

// //? Recorrer los elementos de un arreglo

// numeros.forEach( function(numero) {  //! forEach se ejecuta mientras el arreglo tenga elementos
//     console.log(numero);
// })

//? Agregar elementos al final del arreglo

// numeros[5] = 60;  // Agregar un indice siguiente
// numeros[6] = 70;  //! Si ponemos una posición que si existe, modificará ese valor

numeros.push(60, 70, 80);  // Agrega al final del arreglo
numeros.unshift(-10, -20, -30);  // Agregar al inicio del arreglo

console.table(numeros);  


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

// meses.pop();  // Elimina el último elemento
// meses.shift();  // Elimina el primer elemento

// meses.splice(2, 1);  // .splice(indice del valor, cantidad de valores a eliminar);
// console.table(meses);

//! Para no modificar el arreglo original, se usará el Rest Operator o Spread Operator para crear una copia

const nuevoArreglo = ['Junio', ...meses];

console.log(nuevoArreglo);