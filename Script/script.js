
// Formulario selector de fechas


function comprobarFecha() {
    var fechaIda = document.getElementById("ejemplo").value;

    var fechaVuelta = document.getElementById("ejemplo2").value;

    var fechaFormatIda = new Date(fechaIda + "T00:00:00");

    var fechaFormatVuelta = new Date(fechaVuelta + "T00:00:00");


    if (fechaIda < fechaVuelta) {
        alert("¡Gracias por viaja con nosotros!");

        // Redirección a la página de pasaje
        window.location.href = "pasaje.html";

        // ERROR fecha invertida
    } else if (fechaFormatIda.getTime() === fechaFormatVuelta.getTime()) {

        // ERROR mismo día
        alert("Su viaje debe durar al menos una noche");

    } else {
        alert("La fecha de partida debe ser antes de la fecha de regreso.");
    }

}

// Login

var usuarios = [

    // Pasajero
    {
        "mail": "dove123",
        "contraseña": "633TQ",
        "rol": 1
    },

    // Administrador
    {
        "mail": "Juan",
        "contraseña": "Perez",
        "rol": 2
    }
];

// Captura de datos para el login 

function InicioSesion() {
    var mail = document.getElementById("mail").value;
    var contraseña = document.getElementById("contraseña").value;


    for (let index = 0; index < usuarios.length; index++) {
        if (usuarios[index].mail === mail && usuarios[index].contraseña === contraseña) {
            if (usuarios[index].rol == 1) {


                // Redirigir al pasajero
                window.location.href = '/pasajero.html';
            } else if (usuarios[index].rol == 2) {


                // Redirigir al administrador
                window.location.href = '/admihome.html';
            }
            return;
        }
    }
    alert("Datos Incorrectos");
}
