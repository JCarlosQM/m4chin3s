function copiarCodigo(elemento) {
    // Encuentra el contenedor padre del enlace clicado
    var contenedor = elemento.closest('.codigo-container');
    if (contenedor) {
        // Encuentra el bloque <pre> dentro de este contenedor
        var codigo = contenedor.querySelector('pre.codigo');
        if (codigo) {
            var seleccion = window.getSelection();
            var rango = document.createRange();
            rango.selectNodeContents(codigo);
            seleccion.removeAllRanges();
            seleccion.addRange(rango);
            try {
                var exito = document.execCommand("copy");
                if (exito) {
                    alert("El código ha sido copiado al portapapeles");
                } else {
                    alert("No se pudo copiar el código.");
                }
            } catch (err) {
                console.error("Error al copiar el código: ", err);
            }
            seleccion.removeAllRanges();
        } else {
            console.error('No se encontró el bloque <pre> dentro del contenedor.');
        }
    } else {
        console.error('No se encontró el contenedor adecuado.');
    }
}
