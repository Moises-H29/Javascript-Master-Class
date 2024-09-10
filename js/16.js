// Declaración de Función

function sumar() {
    console.log(10 + 10);
}

sumar();

// Expresión de la Función
//! Evitamos hoisting
const sumar2 = function() {
    console.log(3 + 3);
}

sumar2();

// IIFE
//? Uno de sus usos puede ser proteger variables para que no sean usadas en otros archivos

(function() {
    console.log('Esto es una función');
})();

console.log(cliente);