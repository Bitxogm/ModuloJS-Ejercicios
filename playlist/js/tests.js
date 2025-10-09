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
  try {
        myMusicCatalog.removeSongFromPlaylist(playlist2, 'Canción Inexistente');
        console.log("❌ ERROR: El código debió lanzar un error, pero no lo hizo.");
    } catch (error) {
        // Capturamos el error (lo que esperábamos que pasara)
        console.log(`✅ ÉXITO: El error esperado fue capturado: ${error.message}`);
    } 
    
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
// --- PRUEBAS DE FAVORITO ---
console.log("\n--- INICIANDO PRUEBAS DE FAVORITO ---");

const testFavorite = () => {
    const songToToggle = newSong.title; // 'Song 1'
    
    // Antes de la prueba, verificamos que 'Song 1' en Playlist 2 NO es favorita
    console.log("Playlist 2 (INICIO):", myMusicCatalog.getAllPlaylists()[1].songs[0].favorite); // Debería ser false

    // CASO 1: Marcar como favorito (debe cambiar a true)
    console.log("\n[CASO 1] Marcando 'Song 1' en Playlist 2 como favorita...");
    myMusicCatalog.favoriteSong(playlist2, songToToggle); 
    
    // Verificamos el estado: debe ser true
    console.log("Playlist 2 (FAVORITA):", myMusicCatalog.getAllPlaylists()[1].songs[0].favorite);
    
    // CASO 2: Desmarcar como favorito (debe cambiar a false)
    console.log("\n[CASO 2] Desmarcando 'Song 1' en Playlist 2...");
    myMusicCatalog.favoriteSong(playlist2, songToToggle); 
    
    // Verificamos el estado: debe ser false (el toggle funcionó dos veces)
    console.log("Playlist 2 (NO FAVORITA):", myMusicCatalog.getAllPlaylists()[1].songs[0].favorite);
    
    // CASO 3: Intentar marcar una canción inexistente (Debería lanzar error si añadiste la validación de la canción)
    console.log("\n[CASO 3] Intentando marcar canción inexistente...");
    // myMusicCatalog.favoriteSong(playlist2, 'Canción No Existe'); // Descomentar si añadiste la validación
};

testFavorite();



// Verificamos el estado final del catálogo completo (opcional, pero útil)
console.log("\n--- ESTADO FINAL DEL CATÁLOGO ---");
console.log(myMusicCatalog.getAllPlaylists());
