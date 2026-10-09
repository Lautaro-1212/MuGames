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

export function isCorrect(selection){
    const isCorrect = selection === gameState.currentSong.name;

    if(isCorrect){
        gameState.points += 100;
        gameState.state = "NEXT_ROUND"
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