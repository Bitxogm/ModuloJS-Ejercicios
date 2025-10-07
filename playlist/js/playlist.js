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
   * Adds a new playlist to the catalog.
   * @param {string} playlistName - The name of the new playlist.
   */
  const createPlaylist = (playlistName) => {
    // 1- Creamos la nueva playlist con el nombre playlist y el array de songs vacio.
    const newPlaylist = {
      name: playlistName,
      songs: [],
    };
    // 2- Añadimos la playlist creada al array de playlist con operador spread
    playlists = [...playlists, newPlaylist];
    console.log(`Playlist ${playlistName} created. Total ${playlists.length}`);
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
    const updatedPlaylist = playlists.filter(playlist => playlist.name !== playlistName);

    // Actualizamos la playlist con la playlist que pasa el filtro
    playlists = updatedPlaylist;
    console.log(`Playlist ${playlistName} removed. Total ${playlists.length}`);
  };

  /**
   * Adds a song to a specific playlist.
   * @param {string} playlistName - The name of the playlist to add the song to.
   * @param {{ title: string, artist: string, genre: string, duration: number }} song - The song to add to the playlist.
   * @throws {Error} If the playlist is not found.
   */
  const addSongToPlaylist = (playlistName, song) => {
    // 1- buscamos el indicwe de la lista que coincida con el argumento y playlist.name
    const playlistIndex = playlists.findIndex(playlist => playlist.name === playlistName);
    if (playlistIndex === -1) {
      throw new Error(`Playlist ${playlistName} not found`);
    }

    //2- Creamos newSong , la añadimos a song (...), y establecemos favorite en false , para luego cambiar a true cuando hagamos metod favoriteSongs
    const newSong = {
      ...song,
      favorite: false,
    };

    //·- En lista playlists , mapeamos playlist y indice , si indice es igual a playlistIndex, añadimos a la playlist songs y dentro dela lista playlist.songs(...) la newSong.
    // En caso contrario devovemos playlist
    playlists = playlists.map((playlist, index) => index === playlistIndex
      ? { ...playlist, songs: [...playlist.songs, newSong] }
      : playlist
    );

    console.log(`Song ${song.title} added to playlist ${playlistName}.`);
    console.log(playlists)
  }


  /**
   * Removes a song from a specific playlist.
   * @param {string} playlistName - The name of the playlist to remove the song from.
   * @param {string} title - The title of the song to remove.
   * @throws {Error} If the playlist or song is not found.
   */
  const removeSongFromPlaylist = (playlistName, title) => {
    // 1- buscamos indice de playlist que coincida con playListName
    const playlistIndex = playlists.findIndex(playlist => playlist.name === playlistName);

    //2- Si no existe lanzamos error
    if (playlistIndex === -1) {
      throw new Error(`Playlist ${playlistName} not found`);
    }

    // 3-Creamos copia canciones antes de filter. Sera palylisst,posicion.songs
    const songsBeforeFilter = playlists[playlistIndex].songs;

    // 4-Mapeamos catalogo de playlist y su indice
    playlists = playlists.map((playlist, index) => {

      // 5-Si el indice no coincide con playlistIndex , devolvemos la playlist
      if (index !== playlistIndex) {
        return playlist;
      }
      // 6-Cremos cancionesActualizadas par hacer el filter de la cancion y si la cancion no coincide con tikltle :
      const updatedSongs = playlist.songs.filter(song => song.title !== title);

      // 7-Retorma object playlist y songs con updatedSongs
      return {
        ...playlist,
        songs: updatedSongs
      };
    });
     
    // 8-Cremaos las songs despues defiltrar y asignamos las playlists con indice y las songs
    const songsAfterFilter = playlists[playlistIndex].songs;

      // 9-Si lenght de afterFilter y beforefilter lanzamos error de no encontrada
    if (songsAfterFilter.length === songsBeforeFilter.length) {
      throw new Error(`Song "${title}" not found in playlist "${playlistName}"`);
    }

    console.log(playlists);
    console.log(`Song ${title} removed from playlist ${playlistName}`);
    console.log(playlists);
  };


  /**
   * Marks a song as a favorite or removes the favorite status.
   * @param {string} playlistName - The name of the playlist containing the song.
   * @param {string} title - The title of the song to mark as a favorite.
   * @returns {void}
   */
  const favoriteSong = (playlistName, title) => {
    //1- Buscam,os el indice de la playslist que coincida con playListName
    const playlistIndex = playlists.findIndex(playlist => playlist.name === playlistName);
    if (playlistIndex === -1) {
      return;
    }
    //2- Mapeamos playlists y buscamos playlist e indice
    playlists = playlists.map((playlist, index) => {
      // si index y playlistName son !== devolvemos la playlist
      if (index !== playlistIndex) {
        return playlist
      }

      //3- Creamos cancionesActualizadas para mapear dentro de las songs la song , si song.title es distito a title , devolvemos la song
      const updatedSongs = playlist.songs.map(song => {
        if (song.title !== title) {
          return song;
        }

        // 4- caso contrario añadoimos la song y cambiamos favorite a false (mejor usar !song.favorite que asignar true a capon)
        return {
          ...song,
          favorite: !song.favorite
        };
      });

      // Despues de mapear retornasmos playlist y songs con updatedSongs
      return {
        ...playlist,
        songs: updatedSongs,
      }
    });
  };

  /**
   * Sorts songs in a specific playlist by a given criterion (title, artist, or duration).
   * @param {string} playlistName - The name of the playlist to sort songs in.
   * @param {'title' | 'artist' | 'duration'} criterion - The criterion to sort by.
   * @returns {void}
   * @throws {Error} If the playlist is not found or the criterion is invalid.
   */
  const sortSongs = (playlistName, criterion) => {
    //Encontrar indice playlis
    const playlistIndex = playlists.findIndex(playlist => playlist.name === playlistName);
    if(playlistIndex === -1){
      throw new Error(`Playlist ${playlistName} not found`)
    }

    //Comprobar criterio
    const sortByCriterion = ['title', 'artist', 'duration'];
    if(!sortByCriterion.includes(criterion)){
      throw new Error(`Invalid criterion.Should be one of: ${sortByCriterion.join(',')}`)
    }

    //Copia playlists
    playlists = playlists.map((playlist, index) => {
      if(index !== playlistIndex){
        return playlist
      }

      //Copia canciones antes de ordenar
      const songsToSort =  [...playlist.songs];

      //ordenar
      let sortedSongs;
      switch(criterion) {
        case "title":
          case "artist":
        sortedSongs = songsToSort.sort((a, b ) => {
          return a[criterion].localeCompare(b[criterion])
        });
        break;

        case "duration":
          sortedSongs = songsToSort.sort((a, b) => {
            return a[criterion] - b[criterion]
          })
          break;
      }

      //Devolver playlist con canciones ordenadas
      return{
        ...playlist,
        songs: songsToSort,
      };

    });
    console.log(`Playlist ${playlistName} sorted by ${criterion}`);
    console.log(playlists)
  }
  
  return { createPlaylist, addSongToPlaylist, removeSongFromPlaylist, sortSongs, getAllPlaylists, removePlaylist, favoriteSong };
};

export default musicCatalog;

