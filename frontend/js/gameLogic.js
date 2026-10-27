import { gameState } from "./gameState.js";
import { orquestator } from "./orquestatorClassicMode.js";

export async function getSongs(){
    let songs

    const response = await fetch("http://localhost:8080/api/song/random")
    
    return songs = await response.json(); 
}

export async function getSongById(id){
    let songs

    const response = await fetch(`http://localhost:8080/api/song/${id}`)
    
    return songs = await response.json();
}   

export async function isCorrect(selection) {
    console.log("1. Entró a isCorrect");

    const correct = selection === gameState.currentSong.name;

    if (correct) {
        gameState.points += 100;
        gameState.state = "NEXT_ROUND";
        orquestator();
    } else {
        gameState.state = "GAME_OVER";

        console.log("2. Antes del POST");

        try {
            await safePlayerData();
            console.log("3. POST finalizado");
        } catch (error) {
            console.error("Error al guardar:", error);
        }

        console.log("4. Antes de orquestator");
        orquestator();
        console.log("5. Después de llamar a orquestator");
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
    //verifyRecord();

    gameState.state = "DIFFICULTY"
    orquestator();
}

export function setPlayer(name, school){
    gameState.playerName = name;
    gameState.playerSchool = school;

    gameState.state = "DIFFICULTY"
    orquestator()
} 

function verifyRecord(){
    if(gameState.points > gameState.record){
        gameState.record = gameState.points;
    }
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
            points: gameState.points,
            school: gameState.playerSchool
        })
    });

    console.log("RESPUESTA DEL POST:", response.status);
}   