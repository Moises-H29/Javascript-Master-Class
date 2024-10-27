// Async / await

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log("Descargando clientes... Espere...");

        setTimeout(() => {
            resolve("Los clientes fueron descargados")
        }, 5000);

    } )
}

async function app() {
    try {
        const resultado = await descargarNuevosClientes();  // El código de abajo se ejecuta hasta que la función haya terminado su ejecución
        console.log("Este codigo si se bloquea");
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

app();

console.log("Este codigo no se bloquea");

