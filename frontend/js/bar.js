const progressBar = document.querySelector("#progress");

document.addEventListener("click", () => {

    const audio = document.createElement("audio");

    audio.src = "./assets/audio/Milo J, Radamel - Radamel (Visualizer) [eKX1uoKDDaI].mp3";

    document.body.appendChild(audio);

    const inicio = 0;
    const duracion = 15;
    const fin = inicio + duracion;

    audio.addEventListener("loadedmetadata", () => {
        console.log("Duración:", audio.duration);

        audio.currentTime = inicio;
    });

    audio.addEventListener("timeupdate", () => {

        const transcurrido = audio.currentTime - inicio;

        const porcentaje = (transcurrido / duracion) * 100;

        progressBar.style.width = `${Math.min(porcentaje, 100)}%`;

        if (audio.currentTime >= fin) {
            audio.pause();
            progressBar.style.width = "100%";
        }
    });

    audio.play()
        .then(() => console.log("REPRODUCIENDO"))
        .catch(error => console.error(error));

}, { once: true });