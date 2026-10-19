import { replay } from "./gameLogic.js";

const tvframe = document.querySelector(".tv-frame");
const tvscreen = document.querySelector(".tv-screen");

export function GameOverGenerator() {
    clearSceen();

    createGameOverUI();

    GameOverOptionsGenerator();
}

function createGameOverUI() {
    const gameOverContainer = document.createElement("div");
    gameOverContainer.classList.add("gameOverContainer");

    const title = document.createElement("p");
    title.classList.add("title");
    title.innerHTML = "Game<br>Over";

    const gameOverOptionsContainer = document.createElement("div");
    gameOverOptionsContainer.classList.add("gameOverOptionsContainer");

    gameOverContainer.append(title, gameOverOptionsContainer);

    tvscreen.appendChild(gameOverContainer);
}

function GameOverOptionsGenerator() {
    const gameOverOptionsContainer = tvscreen.querySelector(
        ".gameOverOptionsContainer"
    );

    const a = document.createElement("a");
    const button = document.createElement("button")

    button.classList.add("gameOverOptions");
    button.innerHTML = `Volver a<br>jugar`;

    button.addEventListener("click", () => {
        replay()
    })

    a.classList.add("gameOverOptions", "Salir");
    a.innerHTML = `Salir`;
    a.href = "index.html";

    gameOverOptionsContainer.append(button, a);
}

function clearSceen() {
    tvscreen.innerHTML = "";
}