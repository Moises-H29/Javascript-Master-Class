async function obtenerEmpleados() {

    const archivo = 'empleados.json';

    //? Con Promises
    /*
    fetch(archivo)
        .then( resultado => {
            return resultado.json();  //? En arrow functions, el return y las llaves pueden omitirse si solo es una linea (como en este caso)
        } )
        .then( datos => {
            // console.log(datos.empleados);

            const { empleados } = datos;
            // console.log(empleados);

            empleados.forEach( empleado => {
                // console.log(empleado);
                console.log(empleado.id);
                console.log(empleado.nombre);
                console.log(empleado.puesto);

            } )
        } )
        */
       //? Con Async / Await
       const resultado = await fetch(archivo);
       const datos = await resultado.json();
       console.log(datos);

}

obtenerEmpleados();