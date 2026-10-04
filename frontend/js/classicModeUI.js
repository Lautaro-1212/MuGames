const songInformation = document.querySelector(".songInformation")
const optionsSongsContainer = document.querySelector(".optionsSongs-container")

export function ClassicUIGenerator(songs){
    const correctSong = songs.find(song => song.isCorrect === true)

    informationSongGenerator(correctSong)
    optionsGenerator(songs)
    barGenerator(correctSong)
}

function informationSongGenerator(correctSong){
    const img = document.createElement("img")

    img.src = correctSong.imageSrc;

    img.alt = "Imagen cancion";

    img.classList.add("songImage");

    const p = document.createElement("p");

    p.innerText = correctSong.artist;

    p.classList.add("artistName")

    songInformation.appendChild(img);

    songInformation.appendChild(p)
}

function optionsGenerator(songs){
    for(const song of songs){
        const button = document.createElement("button");

        button.innerText = song.name;

        button.dataset.value = song.isCorrect;

        button.classList.add("songOptions") 

        button.addEventListener("click", () => {
            
            const isCorrect = button.dataset.value === "true";

            console.log(isCorrect);
        });

        optionsSongsContainer.appendChild(button)
    }
}

function barGenerator(correctSong){
    const progress = document.querySelector("#progress");

    document.addEventListener("click", () => {

        const audio = document.createElement("audio");
        audio.src = correctSong.songSrc;

        let start;
        let end;

        document.body.appendChild(audio);

        audio.addEventListener("loadedmetadata", () => {

            start = Math.floor(Math.random() * (audio.duration - 10));
            end = start + correctSong.duration;

            console.log("Empieza " + start)
            console.log("Termina en " + end)

            audio.currentTime = start;

            audio.play()
                .then(() => console.log("REPRODUCIENDO"))
                .catch(error => console.error(error));
        });

        audio.addEventListener("timeupdate", () => {

            const transcurrido = audio.currentTime - start;
            const porcentaje = (transcurrido / correctSong.duration) * 100;

            progress.style.width = `${Math.min(porcentaje, 100)}%`;

            if (audio.currentTime >= end) {
                audio.pause();
                progress.style.width = "100%";
            }
        });

    }, { once: true });
}