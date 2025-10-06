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

// --- PRUEBAS DE ELIMINACIÓN ---
console.log("\n--- INICIANDO PRUEBAS DE ELIMINACIÓN ---");

const testRemovals = () => {
    
    // CASO 1: Eliminar una canción de Playlist 1 (tiene 2 canciones)
    console.log("\n[CASO 1] Eliminando 1 de 2 canciones de 'Playlist 1'...");
    myMusicCatalog.removeSongFromPlaylist(playlist1, newSong.title); 
    
    // Verificamos el estado de Playlist 1: debería tener 1 canción
    console.log("Playlist 1 (DESPUÉS):", myMusicCatalog.getAllPlaylists()[0]);
    // Deberías ver: songs: Array(1)

    // CASO 2: Intentar eliminar una canción que NO existe
    console.log("\n[CASO 2] Intentando eliminar una canción que no existe en 'Playlist 2'...");
    // Esto debería generar el mensaje de error que definiste, pero el catálogo no debería cambiar
    myMusicCatalog.removeSongFromPlaylist(playlist2, 'Canción Inexistente'); 
    
    // Verificamos el estado de Playlist 2: debería tener 3 canciones (sin cambios)
    console.log("Playlist 2 (DESPUÉS):", myMusicCatalog.getAllPlaylists()[1]);
    // Deberías ver: songs: Array(3)
    
    // CASO 3: Eliminar todas las canciones de Playlist 3 (tiene 4 canciones)
    console.log("\n[CASO 3] Eliminando todas las canciones de 'Playlist 3'...");
    // Hay que llamar a la función tantas veces como canciones hay
    myMusicCatalog.removeSongFromPlaylist(playlist3, newSong.title);
    myMusicCatalog.removeSongFromPlaylist(playlist3, newSong.title);
    myMusicCatalog.removeSongFromPlaylist(playlist3, newSong.title);
    myMusicCatalog.removeSongFromPlaylist(playlist3, newSong.title);
    
    // Verificamos el estado de Playlist 3: debería tener 0 canciones
    console.log("Playlist 3 (DESPUÉS):", myMusicCatalog.getAllPlaylists()[2]);
    // Deberías ver: songs: Array(0)
};

testRemovals();

// Verificamos el estado final del catálogo completo (opcional, pero útil)
console.log("\n--- ESTADO FINAL DEL CATÁLOGO ---");
console.log(myMusicCatalog.getAllPlaylists());
