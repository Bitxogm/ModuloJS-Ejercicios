import musicCatalog from './playlist.js';

// 1. Creamos la instancia del catálogo
const myMusicCatalog = musicCatalog();

// 2. Definición de Nombres de Playlists
const rockList = 'Rock Classics';
const jazzList = 'Smooth Jazz';

// 3. Definición de Canciones Variadas (Importante para el SORT)
const songs = [
  { title: 'Stairway to Heaven', artist: 'Led Zeppelin', genre: 'Rock', duration: 480 }, // 8 min
  { title: 'Bohemian Rhapsody', artist: 'Queen', genre: 'Rock', duration: 354 },       // 5:54 min
  { title: 'A Love Supreme', artist: 'John Coltrane', genre: 'Jazz', duration: 210 },  // 3:30 min
  { title: 'Take Five', artist: 'Dave Brubeck', genre: 'Jazz', duration: 324 },         // 5:24 min
  { title: 'Yesterday', artist: 'The Beatles', genre: 'Rock', duration: 130 },        // 2:10 min
];

// --- FASE 1: INICIALIZACIÓN Y CARGA DE DATOS ---
console.log("\n--- FASE 1: INICIALIZACIÓN ---");
myMusicCatalog.createPlaylist(rockList);
myMusicCatalog.createPlaylist(jazzList);

console.log("Cargando canciones en Rock Classics:");
myMusicCatalog.addSongToPlaylist(rockList, songs[0]); // Stairway (L)
myMusicCatalog.addSongToPlaylist(rockList, songs[1]); // Bohemian (B)
myMusicCatalog.addSongToPlaylist(rockList, songs[4]); // Yesterday (Y)

console.log("Cargando canciones en Smooth Jazz:");
myMusicCatalog.addSongToPlaylist(jazzList, songs[2]); // A Love (A)
myMusicCatalog.addSongToPlaylist(jazzList, songs[3]); // Take Five (T)

// Estado inicial antes de las pruebas
console.log("\nESTADO INICIAL (Rock Classics):", myMusicCatalog.getAllPlaylists()[0].songs.map(s => s.title));
// Rock Classics debería estar desordenada por título: [Stairway, Bohemian, Yesterday]

// --- FASE 2: PRUEBAS DE FAVORITO (favoriteSong) ---
console.log("\n--- FASE 2: PRUEBAS DE FAVORITO ---");

// 2.1: Marcar una canción (Debe ser FALSE -> TRUE)
console.log("[FAV 1] Marcando 'Bohemian Rhapsody' como favorita...");
myMusicCatalog.favoriteSong(rockList, 'Bohemian Rhapsody'); 
// Verificar estado
const favoriteStatus1 = myMusicCatalog.getAllPlaylists()[0].songs.find(s => s.title === 'Bohemian Rhapsody').favorite;
console.log(` -> Estado de 'Bohemian Rhapsody': ${favoriteStatus1} (Debe ser true)`);

// 2.2: Desmarcar la misma canción (Debe ser TRUE -> FALSE)
console.log("[FAV 2] Desmarcando 'Bohemian Rhapsody'...");
myMusicCatalog.favoriteSong(rockList, 'Bohemian Rhapsody');
// Verificar estado
const favoriteStatus2 = myMusicCatalog.getAllPlaylists()[0].songs.find(s => s.title === 'Bohemian Rhapsody').favorite;
console.log(` -> Estado de 'Bohemian Rhapsody': ${favoriteStatus2} (Debe ser false)`);

// 2.3: Prueba de Error (Si la canción no existe)
console.log("[FAV 3] Intentando marcar canción inexistente (Debe lanzar error):");
try {
    myMusicCatalog.favoriteSong(rockList, 'Canción Fantasma'); 
} catch (error) {
    console.log(`✅ ÉXITO: Error capturado - ${error.message}`);
}

// --- FASE 3: PRUEBAS DE ORDENACIÓN (sortSongs) ---
console.log("\n--- FASE 3: PRUEBAS DE ORDENACIÓN ---");

// 3.1: Ordenar por Título (Debe ir B, S, Y)
console.log(`[SORT 1] Ordenando '${rockList}' por Título...`);
myMusicCatalog.sortSongs(rockList, 'title');
let sortedTitles = myMusicCatalog.getAllPlaylists()[0].songs.map(s => s.title);
console.log(" -> Orden por Título:", sortedTitles);
// Debe ser: [Bohemian Rhapsody, Stairway to Heaven, Yesterday]

// 3.2: Ordenar por Artista (Debe ir B, Q, S)
console.log(`[SORT 2] Ordenando '${rockList}' por Artista...`);
myMusicCatalog.sortSongs(rockList, 'artist');
let sortedArtists = myMusicCatalog.getAllPlaylists()[0].songs.map(s => s.artist);
console.log(" -> Orden por Artista:", sortedArtists);
// Debe ser: [The Beatles, Led Zeppelin, Queen] - ERROR MENTAL MÍO: [Led Zeppelin, Queen, The Beatles] (L, Q, T) ¡La 'L' va antes de la 'Q' y la 'T' va al final!

// 3.3: Ordenar por Duración (Debe ir la más corta a la más larga)
console.log(`[SORT 3] Ordenando '${jazzList}' por Duración (Corta a Larga)...`);
myMusicCatalog.sortSongs(jazzList, 'duration');
let sortedDurations = myMusicCatalog.getAllPlaylists()[1].songs.map(s => s.duration);
console.log(" -> Orden por Duración (segundos):", sortedDurations);
// Debe ser: [210, 324]

// 3.4: Prueba de Error (Criterio Inválido)
console.log("[SORT 4] Intentando ordenar por criterio inválido (Debe lanzar error):");
try {
    myMusicCatalog.sortSongs(rockList, 'releaseYear'); 
} catch (error) {
    console.log(`✅ ÉXITO: Error capturado - ${error.message}`);
}


// --- ESTADO FINAL ---
console.log("\n--- ESTADO FINAL DEL CATÁLOGO ---");
console.log(myMusicCatalog.getAllPlaylists());