export const gameState = {
    duration: null,
    currentSong: selectCurrentSong,
}

export function selectCurrentSong(songs) {
    return songs[Math.floor(Math.random() * songs.length)];
}