import {getTop5} from 'gameLogic.js'

const jugadores = await getTop5();

const tabla = document.querySelector(".tabla-ranking");

// Generar las filas HTML.
jugadores.forEach((jugador, index) => {
    const fila = document.createElement("div");
    fila.classList.add("fila");

    fila.innerHTML = `
        <div class="columnaTop">${index + 1}</div>
        <div>${jugador.points}</div>
        <div>${jugador.name}</div>
        <div>${jugador.school}</div>
    `;

    tabla.appendChild(fila);
});
