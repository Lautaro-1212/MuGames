import { progressBar } from "./bar.js";
import { optionsGenerator } from "./optionsGenerator.js"

const buttons = document.querySelectorAll(".song");

const songs = [{
        name: "Radamel",
        src: "./assets/audio/Milo J, Radamel - Radamel (Visualizer) [eKX1uoKDDaI].mp3",
        start: 20,
        duration: 5,
        isCorrect: true
    },
    {
        name: "Flaca",
        src: "",
        start: 0,
        duration: 0,
        isCorrect: false
    },
    {
        name: "Nose",
        src: "",
        start: 0,
        duration: 22,
        isCorrect: false
    }
]

progressBar(songs[0])
optionsGenerator(songs)