const usuarioAutenticado = new Promise( (resolve, reject) => {  // Se coloca una instancia de Promise con los valores automaticos
    const auth = true;

    if(auth) {
        resolve("Usuario autenticadoooooooooo");  // EL PROMISE SE CUMPLE
    }else {
        reject("No se pudo iniciar sesión");  // el promise no se cumple
    }
} );

usuarioAutenticado
    .then( resultado => console.log(resultado) )
    .catch( error => console.log(error) )

// ? En los Promises existent 3 valores posibles
//   Pending : El Promise no se ha cumplido pero tampoco se ha rechazado
// * Fulfilled : Ya se cumplió
// ! Rejected : No se pudo cumplir