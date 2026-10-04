import { ClassicUIGenerator } from "./classicModeUI.js"

const buttons = document.querySelectorAll(".song");

const songs = [{
        name: "Radamel",
        artist: "Radamel",
        songSrc: "./assets/audio/Milo J, Radamel - Radamel (Visualizer) [eKX1uoKDDaI].mp3",
        imageSrc: "./assets/images/LEMC.jpeg",
        duration: 10,
        isCorrect: true
    },
    {
        name: "Flaca",
        src: "",
        duration: 0,
        isCorrect: false
    },
    {
        name: "Nose",
        src: "",
        duration: 22,
        isCorrect: false
    }
]

ClassicUIGenerator(songs)