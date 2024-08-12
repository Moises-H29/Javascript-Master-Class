// String o Cadenas de Texto
const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo';
const productoPrueba = 'Monitor HD';
const correo = 'correo@correo.com';

// Usando el constructor de String
const producto2 = String('Monitor de 30 pulgadas');

// Usando new para construir objetos
const producto3 = new String('Monitor de 50 pulgadas');
console.log(typeof producto3);

//? Atributo length para la extensión
console.log(tweet.length);
console.log(productoPrueba);

//? Método IndexOf para encontrar un elemento en un String (retorna posición)
console.log(tweet.indexOf("JavaScript"));
console.log(productoPrueba.indexOf("Tablet"));  //* Devuelve -1 porque la palabra "Tablet" no se encuentra
console.log(correo.indexOf("@"));  //* Forma antigua de validar un correo

//? Includes (retorna true o false) 
console.log(tweet.includes("JavaScript"));
console.log(productoPrueba.includes("Tablet"));
console.log(correo.includes("@"));

