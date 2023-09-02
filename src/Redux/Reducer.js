import { GET_USER_ALL, GET_USER_ID, GET_USER_NAME, FAILURE } from "./Users/Users"
import { GET_SONG_ALL, GET_SONG_ALL_QUERY, GET_SONG_ALL_QUERY_FILTER,GET_SONG_ID, GET_SONG_NAME,GET_SONG_NAME_FILTER,FAILURE } from "./Songs/Songs"

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
        case GET_USER_ALL: return {...state, generalUsers: action.payload, }

        case GET_USER_ID: return {...state, generalUsers: action.payload, }

        case GET_USER_NAME: return {...state, generalUsers: action.payload, }

        case FAILURE: return {...state, failure: action.payload}
        
        case GET_SONG_ALL: return {...state, generalSongs: action.payload ,copySongs: action.payload}

        case GET_SONG_ID: return {...state, generalSongs: action.payload ,copySongs:action.payload}

        case GET_SONG_NAME: return {...state, generalSongs: action.payload ,copySongs: action.payload}

        case GET_SONG_ALL_QUERY: return {...state, generalSongs: action.payload ,copySongs: action.payload}

        case GET_SONG_ALL_QUERY_FILTER: return {...state, detailSongs: action.payload}

        case GET_SONG_NAME_FILTER: return {...state, detailSongs: action.payload}

        default: return {...state}
    }
}

export default rootReducer