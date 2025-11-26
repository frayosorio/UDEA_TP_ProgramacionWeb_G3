cartas = [];

function repartir() {
    mesa = document.getElementById("mesa");

    cartas = [];
    mesa.innerHTML = "";
    for (i = 0; i < 10; i++) {
        numeroCarta = Math.floor(Math.random() * 52) + 1;
        cartas.push(numeroCarta);
        imgCarta = document.createElement("img");
        imgCarta.src = "imagenes/cartas/Carta" + numeroCarta + ".jpg";

        mesa.appendChild(imgCarta);
    }
}

function obtenerIndiceNumero(indice) {
    residuo = indice % 13;
    return residuo == 0 ? 12 : residuo - 1;
}

function verificar() {
    contadores = Array(13).fill(0);

    for (i = 0; i < cartas.length; i++) {
        contadores[obtenerIndiceNumero(cartas[i])]++;
    }

    grupo = ["", "", "Par", "Terna", "Cuarta", "Quinta", "Sexta", "Septima", "Octava", "Novena", "Decima"];
    nombre = ["As", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

    gruposEncontrados = contadores.map((contador, i) => contador >= 2 ? `${grupo[contador]} de ${nombre[i]}` : "")
        .filter(item => item != "");

    grupos = gruposEncontrados.length == 0 ? "No se encontraron grupos" : "Se encontraron los siguientes grupos:\n" +
        gruposEncontrados.join("\n");

    window.alert(grupos);
}