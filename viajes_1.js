
/* Aquí se guarda la información sobre los viajes en una lista (o arreglo). */
const viajes = [];

const registrarDestino = (destino, fecha, transporte) => {
    viajes.push({
        destino,
        fecha,
        transporte
    });
};

const bienvenido = () => "¡BIENVENIDO A PLANIFICA TU VIAJE!";

/* Función para calcular costos */
const calcularCosto = (destino, transporte) => {
    let costo = 0;
    if(destino === "Querétaro") {
        costo = 1300;
    }
    else if(destino === "Guadalajara") {
        costo = 8000;
    }
    else {
        costo = 5000;
    }

    if(transporte === "Avión") {
        costo += 4000;
    }

    if(transporte === "Autobús") {
        costo += 1500;
    }

    return costo;
};

/* Función para mostrar el itinerario */
const mostrarItinerario = () => {
    let texto = "";
    for(const viaje of viajes){
        const costo =
            calcularCosto(
                viaje.destino,
                viaje.transporte
            );
        texto += `
        <p>
        Destino: ${viaje.destino}<br>
        Fecha: ${viaje.fecha}<br>
        Transporte: ${viaje.transporte}<br>
        Costo: $${costo}
        </p>
        `;
    }
    return texto;
};

/* Exportar funciones <--- registrar_1.js */
export {
    registrarDestino,
    mostrarItinerario
};
