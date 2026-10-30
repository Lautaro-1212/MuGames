import { gameState } from "./gameState.js";
import { orquestator } from "./orquestatorClassicMode.js";

export async function getSongs() {
    const response = await fetch("http://localhost:8080/api/song/random");

    const body = await response.text();

    return JSON.parse(body);
}

export async function getSongById(id){
    let songs

    const response = await fetch(`http://localhost:8080/api/song/${id}`)
    
    return songs = await response.json();
}   

export async function isCorrect(selection) {
    const correct = selection === gameState.currentSong.name;

    if (correct) {
        gameState.score += 100;
        gameState.state = "NEXT_ROUND";
        orquestator();
    } else {
        gameState.state = "GAME_OVER";

        try {
            await safePlayerData();
        } catch (error) {
            console.error("Error al guardar:", error);
        }

        orquestator();
    }
}

export function selectDifficult(difficulty){
    switch(difficulty){
        case "easy":
            gameState.duration = 15;
            gameState.state = "NEXT_ROUND"
            console.log("Se escogio la dificultad " + difficulty)
            orquestator()
            break;
        
        case "medium":
            gameState.duration = 10;
            gameState.state = "NEXT_ROUND"
            console.log("Se escogio la dificultad " + difficulty)
            orquestator();
            break;

        case "hard":
            gameState.duration = 5;
            gameState.state = "NEXT_ROUND"
            console.log("Se escogio la dificultad " + difficulty)
            orquestator();
            break;

        default:
            console.log("Error")
    }
} 

export function replay(){
    gameState.state = "DIFFICULTY"
    orquestator();
}

export function setPlayer(name, school){
    gameState.playerName = name;
    gameState.playerSchool = school;

    gameState.state = "DIFFICULTY"
    orquestator()
} 


async function safePlayerData() {
    console.log("ANTES DEL POST");

    const response = await fetch("http://localhost:8080/api/player", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: gameState.playerName,
            score: gameState.score,
            school: gameState.playerSchool
        })
    });

    console.log("RESPUESTA DEL POST:", response.status);
}   

