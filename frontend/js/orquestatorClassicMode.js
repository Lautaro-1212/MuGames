import { ClassicUIGenerator } from "./classicModeUI.js"
import { gameState, selectCurrentSong } from "./gameState.js";

const buttons = document.querySelectorAll(".song");

const songs = [{
        name: "Radamel",
        artist: "Radamel",
        songSrc: "./assets/audio/Milo J, Radamel - Radamel (Visualizer) [eKX1uoKDDaI].mp3",
        imageSrc: "./assets/images/LEMC.jpeg",
    },
    {
        name: "Tú sí sabes quererme",
        artist: "Natalia Lafourcade",
        songSrc: "./assets/audio/Tú Sí Sabes Quererme.mp3",
        imageSrc: "./assets/images/TSSQ.jpeg",
    },
    {
        name: "Negra Murguera",
        artist: "Bersuit",
        songSrc: "./assets/audio/Negra Murguera.mp3",
        imageSrc: "./assets/images/NM.jpeg",
    }
]

gameState.duration = 10;
gameState.currentSong = selectCurrentSong(songs)
ClassicUIGenerator(songs)