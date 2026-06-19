/* Importa las funciones ---> viajes_1.js */
import {
    registrarDestino,
    mostrarItinerario
} from "./viajes_1.js";

/* Registrar viaje */
document
.getElementById("boton-registrar")
.addEventListener("click", () => {
    const destino =
        document.getElementById("destino").value;
    const fecha =
        document.getElementById("fecha").value;
    const transporte =
        document.getElementById("transporte").value;
    registrarDestino(
        destino,
        fecha,
        transporte
    );

    alert("Viaje registrado");
});

/* Mostrar itinerario */
document
.getElementById("boton-mostrar")
.addEventListener("click", () => {
    document.getElementById("resultado").innerHTML =
        mostrarItinerario();
});