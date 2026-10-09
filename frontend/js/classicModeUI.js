import { gameState } from "./gameState.js";
import { isCorrect } from "./gameLogic.js";

const tvframe = document.querySelector(".tv-frame");
const tvscreen = document.querySelector(".tv-screen");

let songInformation;
let optionsSongsContainer;
let progress;

export function ClassicUIGenerator(songs) {
    clearSceen();

    createClassicMode();

    songInformation = tvscreen.querySelector(".songInformation");
    optionsSongsContainer = tvscreen.querySelector(".optionsSongs-container");
    progress = tvscreen.querySelector("#progress");

    informationSongGenerator();
    optionsGenerator(songs);
    barGenerator();
    pointGenerator();
}

function informationSongGenerator(){
    const img = document.createElement("img")

    img.src = `http://localhost:8080/files/images/${gameState.currentSong.imageSrc}`;

    img.alt = "Imagen cancion";

    img.classList.add("songImage");

    const p = document.createElement("p");

    p.innerText = gameState.currentSong.artist;

    p.classList.add("artistName")

    songInformation.appendChild(img);

    songInformation.appendChild(p)
}

function optionsGenerator(songs){
    for(const song of songs){
        const button = document.createElement("button");

        button.innerText = song.name;

        button.dataset.name = song.name;

        button.classList.add("songOptions") 

        button.addEventListener("click", () => {
            
            isCorrect(button.dataset.name)

        });

        optionsSongsContainer.appendChild(button)
    }
}

function barGenerator(){

    document.addEventListener("click", () => {

        const audio = document.createElement("audio");
        audio.src = `http://localhost:8080/files/audio/${gameState.currentSong.songSrc}`;

        let start;
        let end;

        optionsSongsContainer.appendChild(audio);

        audio.addEventListener("loadedmetadata", () => {

            start = Math.floor(Math.random() * (audio.duration - 10));
            end = start + gameState.duration;

            console.log("Empieza " + start)
            console.log("Termina en " + end)

            audio.currentTime = start;

            audio.play()
                .then(() => console.log("REPRODUCIENDO"))
                .catch(error => console.error(error));
        });

        audio.addEventListener("timeupdate", () => {

            const transcurrido = audio.currentTime - start;
            const porcentaje = (transcurrido / gameState.duration) * 100;

            progress.style.width = `${Math.min(porcentaje, 100)}%`;

            if (audio.currentTime >= end) {
                audio.pause();
                progress.style.width = "100%";
            }
        });

    }, { once: true });
}

function pointGenerator(){
    const points = document.querySelector(".points");

    points.innerText = gameState.points;

    tvframe.append(points);
}

function clearSceen() {
    tvscreen.innerHTML = "";
}

function createClassicMode() {
    const classicModeContainer = document.createElement("div");
    classicModeContainer.classList.add("classicModeContainer");

    const question = document.createElement("h1");
    question.classList.add("question");
    question.textContent = "¿Que canción es?";

    const songInformation = document.createElement("div");
    songInformation.classList.add("songInformation");

    const progressContainer = document.createElement("div");
    progressContainer.classList.add("progress-container");

    const progress = document.createElement("div");
    progress.id = "progress";

    progressContainer.appendChild(progress);

    classicModeContainer.append(
        question,
        songInformation,
        progressContainer
    );

    const optionsSongsContainer = document.createElement("div");
    optionsSongsContainer.classList.add("optionsSongs-container");

    tvscreen.append(
        classicModeContainer,
        optionsSongsContainer
    );
}