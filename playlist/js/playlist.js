/**
 * @typedef {Object} Song
 * @property {string} title - The title of the song.
 * @property {string} artist - The artist of the song.
 * @property {string} genre - The genre of the song.
 * @property {number} duration - The duration of the song in seconds.
 * @property {boolean} favorite - Whether the song is marked as a favorite.
 */
// Example: { title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }


/**
 * @typedef {Object} Playlist
 * @property {string} name - The name of the playlist.
 * @property {Song[]} songs - The list of songs in the playlist.
 */
// Example: { name: 'Playlist Name', songs: [{ title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }] }


const musicCatalog = () => {
  /**
   * Array of totalPlaylist in the catalog.
   * @type {Playlist[]}
  */
  let playlists = [];
  // TODO: CREAR HELPER GETPLAYLISTINDEX PARA REUTILIZAR EN CADA METODO Y NO REPETIRNOS .  
  /**
   * Helper: Finds a playlist's index or throws an error if not found.
   * @param {string} name - The name of the playlist.
   * @returns {number} The index of the playlist.
   * @throws {Error} If the playlist is not found.
   */
  const getPlaylistIndex = (name) => {
    const index = playlists.findIndex(playlist => playlist.name === name);
    if (index === -1) {
      throw new Error(`Playlist ${name} not found.`);
    }
    return index
  }


  /**
   * Adds a new playlist to the catalog.
   * @param {string} playlistName - The name of the new playlist.
   */
  const createPlaylist = (playlistName) => {
    // 1- Creamos la nueva playlist con el nombre playlist y el array de songs vacio.
    const newPlaylist = {
      name: playlistName,
      songs: []
    };

    // 2- Añadimos la playlist creada al array de playlist con operador spread
    playlists = [...playlists, newPlaylist]
    console.log(`Playlist ${playlistName} created. Total de playlist in catalog ${playlists.length}`)
  };


  /**
   * Gets all playlists in the catalog.
   * @returns {Playlist[]} The list of all playlists.
   */
  const getAllPlaylists = () => {
    // 1- Retornamos todas las playlists
    return playlists;
  };

  /**
   * Removes a playlist from the catalog.
   * @param {string} playlistName - The name of the playlist to remove.
   */
  const removePlaylist = (playlistName) => {
    // 1 Creamos la playlist actualizada para con filter encontrar en el catalogo de playlist la playlist que no coincida 
    // con la que queremos eliminar y dejarla en las playlist , asi borramos la que coincida con playlist. name y playListName
    const updatedPlaylist = playlists.filter(playlist => playlist.name !== playlistName)

    // Actualizamos la playlist con la playlist que pasa el filtro
    playlists = updatedPlaylist;
    console.log(`Playlist ${playlistName} removed in catalog. Total playlist ${playlists.length}`)
  };



  /**
   * Adds a song to a specific playlist.
   * @param {string} playlistName - The name of the playlist to add the song to.
   * @param {{ title: string, artist: string, genre: string, duration: number }} song - The song to add to the playlist.
   * @throws {Error} If the playlist is not found.
   */
  const addSongToPlaylist = (playlistName, song) => { 
    // 1- buscamos el indice de la lista que coincida con el argumento y playlist.name
    const playlistIndex = getPlaylistIndex(playlistName);

    //2- Creamos newSong , la añadimos a song (...), y establecemos favorite en false , para luego cambiar a true cuando hagamos metod favoriteSongs
    const newSong = {
      ...song,
      favorite: false,
    };
    //·- En lista playlists , mapeamos playlist y indice , si indice es igual a playlistIndex, añadimos a la playlist songs y dentro dela lista playlist.songs(...) la newSong.
    playlists = playlists.map((playlist, index) => {
      if(index === playlistIndex){
        // Devolvemos objeto playlist clonado con el array de songs tambien clonado 
        return{
          ...playlist,
          songs: [...playlist.songs, newSong],
        }
      }
      // En caso contrario devovemos playlist
      return playlist
    });
    console.log(`Song ${song.title} added to playlist ${playlistName}.`)
    console.log('Total playlists',playlists)
  };
    







  /**
   * Removes a song from a specific playlist.
   * @param {string} playlistName - The name of the playlist to remove the song from.
   * @param {string} title - The title of the song to remove.
   * @throws {Error} If the playlist or song is not found.
  */
  const removeSongFromPlaylist = (playlistName, title) => { };
  // 1- buscamos indice de playlist que coincida con playListName

  //2- Si no existe lanzamos error

  // 3-Creamos copia canciones antes de filter. Sera palylisst,posicion.songs

  // 4-Mapeamos catalogo de playlist y su indice

  // 5-Si el indice no coincide con playlistIndex , devolvemos la playlist
  // 6-Cremos cancionesActualizadas par hacer el filter de la cancion y si la cancion no coincide con tikltle :

  // 7-Retorma object playlist y songs con updatedSongs

  // 8-Cremaos las songs despues defiltrar y asignamos las playlists con indice y las songs

  // 9-Si lenght de afterFilter y beforefilter lanzamos error de no encontrada




  /**
   * Marks a song as a favorite or removes the favorite status.
   * @param {string} playlistName - The name of the playlist containing the song.
   * @param {string} title - The title of the song to mark as a favorite.
   * @returns {void}
  */
  const favoriteSong = (playlistName, title) => { }
  //1- Buscam,os el indice de la playslist que coincida con playListName

  //2- Mapeamos playlists y buscamos playlist e indice


  //3- Creamos cancionesActualizadas para mapear dentro de las songs la song , si song.title es distito a title , devolvemos la song

  // 4- caso contrario añadoimos la song y cambiamos favorite a false (mejor usar !song.favorite que asignar true a capon)


  // Despues de mapear retornasmos playlist y songs con updatedSongs



  /**
   * Sorts songs in a specific playlist by a given criterion (title, artist, or duration).
   * @param {string} playlistName - The name of the playlist to sort songs in.
   * @param {'title' | 'artist' | 'duration'} criterion - The criterion to sort by.
   * @returns {void}
   * @throws {Error} If the playlist is not found or the criterion is invalid.
  */
  const sortSongs = (playlistName, criterion) => { }
  //Encontrar indice playlis


  //Comprobar criterio

  //Copia playlists


  //Copia canciones antes de ordenar


  //ordenar


  //Devolver playlist con canciones ordenadas


  return { createPlaylist, addSongToPlaylist, removeSongFromPlaylist, sortSongs, getAllPlaylists, removePlaylist, favoriteSong };
};

export default musicCatalog;

