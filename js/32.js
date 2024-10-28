// Async / await

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log("Descargando clientes... Espere...");

        setTimeout(() => {
            resolve("Los clientes fueron descargados")
        }, 5000);

    } )
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log("Descargando pedidos... Espere...");

        setTimeout(() => {
            resolve("Los pedidos fueron descargados")
        }, 3000);

    } )
}

async function app() {
    try {
        // const clientes = await descargarNuevosClientes();  // El código de abajo se ejecuta hasta que la función haya terminado su ejecución
        // const pedidos = await descargarUltimosPedidos();  
        // console.log(clientes);
        // console.log(pedidos);
        
        //? Optimizando un llamado Async / Await (con un arreglo de Promises: Promise.all)
        const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos() ]);  //! Ahora empiezan a ejecutarse a la vez
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();

console.log("Este codigo no se bloquea");

