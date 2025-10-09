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
  
  // Creamos helper para no repetir codigo en los distintos metodos que buscaran el indice de la lista .
  /**
   * Helper: Finds a playlist's index or throws an error if not found.
   * @param {string} name - The name of the playlist.
   * @returns {number} The index of the playlist.
   * @throws {Error} If the playlist is not found.
   */
  const _getPlaylistIndex = (name) => {
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
   * @returns {playlists[]} The list of all playlists.
   */
  const getAllPlaylists = () => {
    return structuredClone(playlists); // StructuredClone for deep copy and prevent external manipulation
  };



  /**
   * Removes a playlist from the catalog.
   * @param {string} playlistName - The name of the playlist to remove.
   */
  const removePlaylist = (playlistName) => {
    _getPlaylistIndex(playlistName)
    // 1 Creamos la playlist actualizada para con filter encontrar en el catalogo de playlist la playlist que no coincida 
    // con la que queremos eliminar y dejarla en las playlist , asi borramos la que coincida con playlist. name y playListName
    const updatedPlaylist = playlists.filter(playlist => playlist.name !== playlistName)
    // Actualizamos la playlist con la playlist que pasa el filtro
    playlists = updatedPlaylist;
  };

  /**
   * Adds a song to a specific playlist.
   * @param {string} playlistName - The name of the playlist to add the song to.
   * @param {{ title: string, artist: string, genre: string, duration: number }} song - The song to add to the playlist.
   * @throws {Error} If the playlist is not found.
   */
  const addSongToPlaylist = (playlistName, song) => {
    // 1- buscamos el indice de la lista que coincida con el argumento y playlist.name
    const playlistIndex = _getPlaylistIndex(playlistName);

    //2- Creamos newSong , la añadimos a song (...), y establecemos favorite en false , para luego cambiar a true cuando hagamos metod favoriteSongs
    const newSong = {
      ...song,
      favorite: false,
    };
    //·- En lista playlists , mapeamos playlist y indice , si indice es igual a playlistIndex, añadimos a la playlist songs y dentro dela lista playlist.songs(...) la newSong.
    playlists = playlists.map((playlist, index) => {
      if (index === playlistIndex) {
        // Devolvemos objeto playlist clonado con el array de songs tambien clonado 
        return {
          ...playlist,
          songs: [...playlist.songs, newSong], 
        }
      }
      // En caso contrario devovemos playlist
      return playlist
    });
    console.log(`Song ${song.title} added to playlist ${playlistName}.`)
    console.log('Total playlists', playlists)
  };

  /**
   * Removes a song from a specific playlist.
   * @param {string} playlistName - The name of the playlist to remove the song from.
   * @param {string} title - The title of the song to remove.
   * @throws {Error} If the playlist or song is not found.
  */
const removeSongFromPlaylist = (playlistName, title) => {
  const playlistIndex = _getPlaylistIndex(playlistName);
  const playlist = playlists[playlistIndex];

  // Verificar si la canción existe
  const songExists = playlist.songs.some(song => song.title === title);
  if (!songExists) {
    throw new Error(`Song "${title}" not found in playlist "${playlistName}"`);
  }

  // Ahora sí, actualizamos de forma inmutable
  playlists = playlists.map((playlist, index) => {
    if (index !== playlistIndex) 
      return playlist;
    return {
      ...playlist,
      songs: playlist.songs.filter(song => song.title !== title)
    };
  });

  console.log(`Song ${title} removed from playlist ${playlistName}`);
};

  /**
   * Marks a song as a favorite or removes the favorite status.
   * @param {string} playlistName - The name of the playlist containing the song.
   * @param {string} title - The title of the song to mark as a favorite.
   * @returns {void}
  */
  const favoriteSong = (playlistName, title) => {
    //1- Buscam,os el indice de la playslist que coincida con playListName
    const playlistIndex = _getPlaylistIndex(playlistName);
      const playlist = playlists[playlistIndex];
    if (!playlist.songs.some(s => s.title === title)) {
  throw new Error(`Song "${title}" not found in playlist ${playlistName}`);
}

    //2- Mapeamos playlists y buscamos playlist e indice
    playlists = playlists.map((playlist, index) => {
      if (index !== playlistIndex) {
        return playlist
      }
      //3- Creamos cancionesActualizadas para mapear dentro de las songs la song , si song.title es distito a title , devolvemos la song
      const updatedSongs = playlist.songs.map(song => {
        if (song.title !== title) {
          return song
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
        songs: updatedSongs
      };
    });
  
    console.log(`Song ${title} added to favorite`)
    console.log(`Total playlist`, playlists);
  }

  /**
   * Sorts songs in a specific playlist by a given criterion (title, artist, or duration).
   * @param {string} playlistName - The name of the playlist to sort songs in.
   * @param {'title' | 'artist' | 'duration'} criterion - The criterion to sort by.
   * @returns {void}
   * @throws {Error} If the playlist is not found or the criterion is invalid.
  */
  const sortSongs = (playlistName, criterion) => {
    //Encontrar indice playlist
    const playlistIndex = _getPlaylistIndex(playlistName);

    //Comprobar criterio
    const sortByCriterion = ['title', 'artist', 'duration']
    if (!sortByCriterion.includes(criterion)) {
      throw new Error(`Invalid criterion shoulb be one of ${sortByCriterion.join(', ')}`);
    }
    //Usamos toSorted para no crear copia , pues no muta el array original ...
    playlists = playlists.map((playlist, index) => {
      if (index !== playlistIndex) return playlist;
      const sortedSongs = playlist.songs.toSorted((a, b ) => {
        if(criterion === 'duration') {
          return a.duration - b.duration
        }
        return a[criterion].localeCompare(b[criterion]);
      });

      return{...playlist, songs: sortedSongs}
    });
    console.log(`Playlist ${playlistName} sorted by ${criterion}`);
    console.log(playlists)
  };
  return { createPlaylist, addSongToPlaylist, removeSongFromPlaylist, sortSongs, getAllPlaylists, removePlaylist, favoriteSong };
};

export default musicCatalog;
