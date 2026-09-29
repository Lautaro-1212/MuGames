const audio = document.querySelector("#audio");
const progressBar = document.querySelector("#progress");

const inicio = 20;
const duracion = 10;
const fin = inicio + duracion;

audio.addEventListener("loadedmetadata", () => {
    audio.currentTime = inicio;

    audio.play().catch(error => {
        console.log("El navegador bloqueó el autoplay:", error);
    });
});

audio.addEventListener("timeupdate", () => {

    if (audio.currentTime >= fin) {
        audio.pause();
        audio.currentTime = inicio;
        progressBar.style.width = "0%";
        return;
    }

    const porcentaje =
        ((audio.currentTime - inicio) / duracion) * 100;

    progressBar.style.width = `${porcentaje}%`;
});