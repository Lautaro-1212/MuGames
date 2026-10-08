export const gameState = {
    state: null,
    duration: null,
    currentSong: selectCurrentSong,
    points: 0
}

export function selectCurrentSong(songs) {
    return songs[Math.floor(Math.random() * songs.length)];
}