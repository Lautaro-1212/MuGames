const optionsSongsContainer = document.querySelector(".optionsSongs-container")

export function ClassicUIGenerator(songs){

    optionsGenerator(songs)
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