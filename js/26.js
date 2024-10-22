//* This

// Object literal
const reservacion = {
    nombre: 'Moises',
    apellido: 'Hernandez',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(this);  // Imprime contexto del this (objeto reservacion)
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

//! No podemos utilizar arrow functions en los métodos de nuestro objeto porque hacen referencia a la ventana global
const reservacion2 = {
    nombre: 'Moises',
    apellido: 'Hernandez',
    total: 5000,
    pagado: false,
    informacion: () => {
        console.log(this);  // Imprime contexto del this (ventana global)
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

const prueba = {
    nombrePersona: 'Juan',
    imprime: () => {
        console.log(`${this.nombrePersona}`);
    }
}

reservacion.informacion();
reservacion2.informacion();

// Imprime undefined porque nombrePersona no existe en la ventana global de JavaScript
prueba.imprime();