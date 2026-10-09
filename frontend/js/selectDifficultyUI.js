import { selectDifficult } from "./gameLogic.js";

const tvframe = document.querySelector(".tv-frame");
const tvscreen = document.querySelector(".tv-screen");

export function DificultySelecctorGenerator() {
    clearSceen();

    createDifficultySelector();

    difficultyOptionsGenerator();
}

function createDifficultySelector() {
    const selectDifficultyContainer = document.createElement("div");
    selectDifficultyContainer.classList.add("selecctDificultyContainer");

    const title = document.createElement("p");
    title.classList.add("dificultsTitle");
    title.innerHTML = "Escoge la<br>dificultad";

    const difficultyOptionsContainer = document.createElement("div");
    difficultyOptionsContainer.classList.add("difficultyOptionsContainer");

    selectDifficultyContainer.append(title, difficultyOptionsContainer);

    tvscreen.appendChild(selectDifficultyContainer);
}

function difficultyOptionsGenerator() {
    const difficultyOptionsContainer = tvscreen.querySelector(
        ".difficultyOptionsContainer"
    );

    const difficulties = [
        { name: "Fácil", value: "easy", className: "easy" },
        { name: "Medio", value: "medium", className: "medium" },
        { name: "Difícil", value: "hard", className: "hard" }
    ];

    for (const difficulty of difficulties) {
        const button = document.createElement("button");

        button.classList.add("difficultyOptions", difficulty.className);
        button.textContent = difficulty.name;
        button.dataset.value = difficulty.value;

        button.addEventListener("click", () => {
            selectDifficult(button.dataset.value)
        });

        difficultyOptionsContainer.appendChild(button);
    }
}

function clearSceen() {
    tvscreen.innerHTML = "";
}