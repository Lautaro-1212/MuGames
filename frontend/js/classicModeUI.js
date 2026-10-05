import { gameState } from "./gameState.js"

const songInformation = document.querySelector(".songInformation")
const optionsSongsContainer = document.querySelector(".optionsSongs-container")

export function ClassicUIGenerator(songs){

    informationSongGenerator()

    optionsGenerator(songs)

    barGenerator()
}

function informationSongGenerator(){
    const img = document.createElement("img")

    img.src = gameState.currentSong.imageSrc;

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
            
            const isCorrect = gameState.currentSong.name === button.dataset.name;

            console.log(isCorrect);
        });

        optionsSongsContainer.appendChild(button)
    }
}

function barGenerator(){
    const progress = document.querySelector("#progress");

    document.addEventListener("click", () => {

        const audio = document.createElement("audio");
        audio.src = gameState.currentSong.songSrc;

        let start;
        let end;

        document.body.appendChild(audio);

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