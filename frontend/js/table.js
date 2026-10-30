export async function getTop5() {
    const response = await fetch("http://localhost:8080/api/player/top5");

    const body = await response.text();

    return JSON.parse(body);
}

const jugadores = await getTop5();
const tabla = document.querySelector(".tabla-ranking");

console.log("Jugadores recibidos:", jugadores);

jugadores.forEach((jugador, index) => {
    const fila = document.createElement("div");
    fila.classList.add("fila");

    fila.innerHTML = `
        <div class="columnaTop">${index + 1}</div>
        <div>${jugador.score}</div>
        <div>${jugador.name}</div>
        <div>${jugador.school}</div>
    `;

    tabla.appendChild(fila);
});
