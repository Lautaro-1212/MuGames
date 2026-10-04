const songInformation = document.querySelector(".songInformation")
const optionsSongsContainer = document.querySelector(".optionsSongs-container")

export function ClassicUIGenerator(songs){
    const correctSong = songs.find(song => song.isCorrect === true)

    informationSongGenerator(correctSong)
    optionsGenerator(songs)
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