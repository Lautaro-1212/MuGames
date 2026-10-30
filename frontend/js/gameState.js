export const gameState = {
    state: null,
    duration: null,
    currentSong: selectCurrentSong,
    score: 0,
    record: 0,
    playerName: null,  
    playerSchool: null
}

export function selectCurrentSong(songs) {
    return songs[Math.floor(Math.random() * songs.length)];
}