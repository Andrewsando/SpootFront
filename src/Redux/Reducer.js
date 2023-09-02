import { GET_USER_ALL, GET_USER_ID, GET_USER_NAME, FAILURE } from "./Users/Users"
import { GET_SONG_ALL, GET_SONG_ALL_QUERY, GET_SONG_ALL_QUERY_FILTER,GET_SONG_ID, GET_SONG_NAME,GET_SONG_NAME_FILTER } from "./Songs/Songs"
import { GET_PLAYLISTS, GET_PLAYLIST_ID, GET_PLAYLIST_NAME} from "./Playlists/Actions"
const initialState={
    generalUsers:[],
    generalSongs:[],
    copySongs:[],
    detailSongs:[], 
    generalPlaylists:[],
    copyPlaylists:[],
    failure:'',
}

const rootReducer=(state= initialState, action)=>{
    switch(action.payload){

      // Reducer para USERS
        case GET_USER_ALL: return {...state, generalUsers: action.payload, }

        case GET_USER_ID: return {...state, generalUsers: action.payload, }

        case GET_USER_NAME: return {...state, generalUsers: action.payload, }

        case FAILURE: return {...state, failure: action.payload}

        //Reducer para SONGS
        
        case GET_SONG_ALL: return {...state, generalSongs: action.payload ,copySongs: action.payload}

        case GET_SONG_ID: return {...state, generalSongs: action.payload ,copySongs:action.payload}

        case GET_SONG_NAME: return {...state, generalSongs: action.payload ,copySongs: action.payload}

        case GET_SONG_ALL_QUERY: return {...state, generalSongs: action.payload ,copySongs: action.payload}

        case GET_SONG_ALL_QUERY_FILTER: return {...state, detailSongs: action.payload}

        case GET_SONG_NAME_FILTER: return {...state, detailSongs: action.payload}

        
          // Reducer para PLAYLISTS
        case GET_PLAYLISTS: return {...state, generalPlaylists: action.payload, copyPlaylists: action.payload}

        case GET_PLAYLIST_ID: return {...state, generalPlaylists: action.payload, copyPlaylists: action.payload}

        case GET_PLAYLIST_NAME: return {...state, generalPlaylists: action.payload, copyPlaylists: action.payload}

        default: return {...state}
    }
}

export default rootReducer