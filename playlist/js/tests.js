import musicCatalog from './playlist.js';

// 1. Creamos instancia de musicCatalog
const myMusicCatalog = musicCatalog();

// 2. Creamos varias playlists
const createPlaylists = () => {
  myMusicCatalog.createPlaylist('Playlist 1'); 
  myMusicCatalog.createPlaylist('Playlist 2');
  myMusicCatalog.createPlaylist('Playlist 3');
};

createPlaylists();
const playlists = myMusicCatalog.getAllPlaylists(); 
console.log(playlists)

const newSong = { title: 'Song 1', artist: 'Artist 1', genre: 'Genre 1', duration: 180 };
const playlist1 = 'Playlist 1';
const playlist2 = 'Playlist 2';
const playlist3 = 'Playlist 3';

// Anadir cancion a playlist
myMusicCatalog.addSongToPlaylist(playlist1, newSong); 
myMusicCatalog.addSongToPlaylist(playlist1, newSong); 
myMusicCatalog.addSongToPlaylist(playlist2, newSong); 
myMusicCatalog.addSongToPlaylist(playlist2, newSong); 
myMusicCatalog.addSongToPlaylist(playlist2, newSong); 
myMusicCatalog.addSongToPlaylist(playlist3, newSong); 
myMusicCatalog.addSongToPlaylist(playlist3, newSong); 
myMusicCatalog.addSongToPlaylist(playlist3, newSong); 
myMusicCatalog.addSongToPlaylist(playlist3, newSong); 
myMusicCatalog.getAllPlaylists(); 
// Ver estado  de cada playlist despues de añadir lñas canciones
console.log("Playlist 1:", myMusicCatalog.getAllPlaylists()[0]);
console.log("Playlist 2:", myMusicCatalog.getAllPlaylists()[1]);
console.log("Playlist 3:", myMusicCatalog.getAllPlaylists()[2]);


