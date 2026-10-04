const progress = document.querySelector("#progress");

export function progressBar(song) {
    document.addEventListener("click", () => {

        const audio = document.createElement("audio");
        audio.src = song.songSrc;

        let start;
        let end;

        document.body.appendChild(audio);

        audio.addEventListener("loadedmetadata", () => {

            start = Math.floor(Math.random() * (audio.duration - 10));
            end = start + song.duration;

            console.log("Empieza " + start)
            console.log("Termina en " + end)

            audio.currentTime = start;

            audio.play()
                .then(() => console.log("REPRODUCIENDO"))
                .catch(error => console.error(error));
        });

        audio.addEventListener("timeupdate", () => {

            const transcurrido = audio.currentTime - start;
            const porcentaje = (transcurrido / song.duration) * 100;

            progress.style.width = `${Math.min(porcentaje, 100)}%`;

            if (audio.currentTime >= end) {
                audio.pause();
                progress.style.width = "100%";
            }
        });

    }, { once: true });
}