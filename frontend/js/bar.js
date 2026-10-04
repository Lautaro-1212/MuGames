const progress = document.querySelector("#progress");

export function progressBar(song){
    document.addEventListener("click", () => {

    const audio = document.createElement("audio");

    audio.src = song.songSrc;

    document.body.appendChild(audio);

    const end = song.start + song.duration;

    audio.addEventListener("loadedmetadata", () => {
        console.log("Duración:", audio.duration);

        audio.currentTime = song.start;
    });

    audio.addEventListener("timeupdate", () => {

        const transcurrido = audio.currentTime - song.start;

        const porcentaje = (transcurrido / song.duration) * 100;

        progress.style.width = `${Math.min(porcentaje, 100)}%`;

        if (audio.currentTime >= end) {
            audio.pause();
            progress.style.width = "100%";
        }
    });

    audio.play()
        .then(() => console.log("REPRODUCIENDO"))
        .catch(error => console.error(error));

    }, { once: true });
}