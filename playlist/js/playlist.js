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

  /**
   * Adds a new playlist to the catalog.
   * @param {string} playlistName - The name of the new playlist.
   */
  const createPlaylist = (playlistName) => {
    const newPlaylist = {
      name: playlistName,
      songs: [],
    };
    playlists = [...playlists, newPlaylist];
    console.log(`Playlist ${playlistName} created. Total ${playlists.length}`);
  };

  /**
   * Gets all playlists in the catalog.
   * @returns {Playlist[]} The list of all playlists.
   */
  const getAllPlaylists = () => {
    return playlists;
  };

  /**
   * Removes a playlist from the catalog.
   * @param {string} playlistName - The name of the playlist to remove.
   */
  const removePlaylist = (playlistName) => {
    const updatedPlaylist = playlists.filter(playlist => playlist.name !== playlistName);
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
    const playlistIndex = playlists.findIndex(playlist => playlist.name === playlistName);
    if (playlistIndex === -1) {
      throw new Error(`Playlist ${playlistName} not found`);
    }

    const newSong = {
      ...song,
      favorite: false,
    };
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
    const playlistIndex = playlists.findIndex(playlist => playlist.name === playlistName);


    if (playlistIndex === -1) {
      throw new Error(`Playlist ${playlistName} not found`);
    }

    const songsBeforeFilter = playlists[playlistIndex].songs;

    playlists = playlists.map((playlist, index) => {
      if (index !== playlistIndex) {
        return playlist;
      }

      const updatedSongs = playlist.songs.filter(song => song.title !== title);

      return {
        ...playlist,
        songs: updatedSongs
      };
    });

    const songsAfterFilter = playlists[playlistIndex].songs;

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


    const playlistIndex = playlists.findIndex(playlist => playlist.name === playlistName);

    if (playlistIndex === -1) {
      return;
    }

    playlists = playlists.map((playlist, index) => {
      if (index !== playlistIndex) {
        return playlist
      }

      const updatedSongs = playlist.songs.map(song => {
        if (song.title !== title) {
          return song;
        }

        return {
          ...song,
          favorite: !song.favorite
        };
      });

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
  const sortSongs = (playlistName, criterion) => { }
  return { createPlaylist, addSongToPlaylist, removeSongFromPlaylist, sortSongs, getAllPlaylists, removePlaylist, favoriteSong };
};

export default musicCatalog;

