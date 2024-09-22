// Métodos de propiedad
const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo Canción con el ID: ${id}`);
    },
    pausar : function() {
        console.log("Pausando canción. . .");
    },
    crearPlaylist : function(nombre) {
        console.log(`Creando playlist con el nombre "${nombre}". . .`);
    },
    reproducirPlaylist : function(nombre) {
        console.log(`Reproduciendo playlist con el nombre "${nombre}"`);
    }
}

reproductor.borrarCancion = function(id){
    console.log(`Eliminando Canción con el ID: ${id}`);
}

reproductor.reproducir(20240);
reproductor.pausar();
reproductor.borrarCancion(49);
reproductor.crearPlaylist("Rap");
reproductor.crearPlaylist("Heavy Metal");
reproductor.reproducirPlaylist("Pop");