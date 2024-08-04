
// Formulario selector de fechas


function comprobarFecha() {
    var fechaIda = document.getElementById("ejemplo").value;


    var fechaFormat = new Date(fechaIda + "T00:00:00");


    var fechaVuelta = document.getElementById("ejemplo2").value;


    var fechaFormat = new Date(fechaVuelta + "T00:00:00");



    if (fechaIda < fechaVuelta) {
        alert("Buen Viaje");

        // Redirección a la página de pasaje
        window.location.href = "pasaje.html";
    } else {
        alert("Datos invalidos");
    }
}

