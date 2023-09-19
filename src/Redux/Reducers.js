import {
  GET_USER_ID, FAILURE, LOGIN_USER, SET_USER, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE,
} from "./Actions/Users";

import {
  GET_SONG_ALL,
  SORT_SONGS_BY_DATE,
  GET_SONG_ARTIST,
  GET_SONG_ID,
  GET_SONG_NAME,
  GET_SONG_GENRE,
  POST_SONG,
  CLEAR_FILTER,
  GENRE_PLUS_ARTIST,
  GENEROS_SONGS,
  EDIT_SONG,

  UPDATE_SONG_POINTS // Points
} from "./Actions/Songs";

import {
  GET_PLAYLISTS,
  GET_PLAYLIST_ID,
  GET_PLAYLIST_NAME,
  DELETE_PLAYLISTS,
  CREATE_PLAYLISTS,
} from "./Actions/Playlists";

import { PAYMENT_MENSUAL, PAYMENT_ANUAL } from "./Actions/Mercadopago";

const initialState = {
  generalUsers: [],
  UserLogins: undefined,
  UserData: {
    username: "",
    email: "",
    id: ""
  },
  paymentData: null,
  generalSongs: [],
  copySongs: [],
  detailSongs: [],
  generosSongs: [],
  generalPlaylists: [],
  copyPlaylists: [],
  failure: "",
  resetPassword: {
    loading: false,
    success: null,
    error: null,
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Reducer para USERS
    case GET_USER_ID:
      return { ...state, generalUsers: action.payload };

    case LOGIN_USER:
      return { ...state, UserLogins: action.payload, UserData: { username: action.payload.user.username, email: action.payload.user.email, id: action.payload.user.id } };

    case FAILURE:
      return { ...state, failure: action.payload };

    case PAYMENT_MENSUAL:
    case PAYMENT_ANUAL:
      return {
        ...state,
        paymentData: action.payload,
      };

    case SET_USER:
      return {
        ...state,
        UserData: action.payload,
      };


    // Reducer para SONGS

    // ---------------------- POINTS -------------------- //

    case UPDATE_SONG_POINTS: 
      return {
        ...state,
        generalSongs:  { 
          result : state.generalSongs.result.map((song) => {
          if (song.id === action.payload.id) {
            console.log("song.id:", song.id);
            console.log("action.payload.id:", action.payload.id);
            console.log("Respuesta de Fetch completa:", action.payload);
            return {
              ...song,
              Points: action.payload.result.Points ?? 0, // Acceder a Points dentro de result
            };
          }
          return song;
        })
      }
      };

    // -------------------------------------------------- //
      
    case GET_SONG_ALL:
      return {
        ...state,
        generalSongs: action.payload,
        copySongs: action.payload,
        clearFilterSongs: action.payload,
      };

    case GET_SONG_ID:
      return {
        ...state,
        generalSongs: action.payload,
      };

    case GET_SONG_NAME:
      return {
        ...state,
        generalSongs: action.payload,
      };

    case GET_SONG_ARTIST:
      return { ...state, generalSongs: action.payload }; //filtro artistas

    case GET_SONG_GENRE:
      return { ...state, generalSongs: action.payload }; //filtro genero

    case GENRE_PLUS_ARTIST: {
      return { ...state, generalSongs: action.payload }; // filtro genero y artista
    }

    case SORT_SONGS_BY_DATE:
      const sortedSongs = [...state.generalSongs]; // Copia de las canciones actuales
      sortedSongs.sort((a, b) => {
        return new Date(b.uploadDate) - new Date(a.uploadDate);
      });
      return { ...state, generalSongs: sortedSongs };

    case POST_SONG:
      return {
        ...state,
        generalSongs: [...state.generalSongs, action.payload],
      };

    case EDIT_SONG:
      return {
        ...state,
        generalSongs: [...state.generalSongs, action.payload],
      };

    case CLEAR_FILTER:
      return { ...state, generalSongs: state.copySongs, failure: '' };

    case GENEROS_SONGS:
      return { ...state, generosSongs: action.payload };

    // Reducer para PLAYLISTS
    case GET_PLAYLISTS:
      return {
        ...state,
        generalPlaylists: action.payload,
        copyPlaylists: action.payload,
      };

    case GET_PLAYLIST_ID:
      return {
        ...state,
        generalPlaylists: action.payload,
        copyPlaylists: action.payload,
      };

    case GET_PLAYLIST_NAME:
      return {
        ...state,
        generalPlaylists: action.payload,
        copyPlaylists: action.payload,
      };

    case CREATE_PLAYLISTS:
      return {
        ...state,
        generalPlaylists: [...state.generalPlaylists, action.payload],
      };

    case DELETE_PLAYLISTS:
      const updatedPlaylists = state.generalPlaylists.filter(
        (playlist) => playlist.id !== action.payload
      );
      return { ...state, generalPlaylists: updatedPlaylists };

    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        resetPassword: { loading: true, success: null, error: null },
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPassword: { loading: false, success: action.payload, error: null },
      };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        resetPassword: { loading: false, success: null, error: action.error },
      };


    default:
      return { ...state };
  }
};

export default rootReducer;
