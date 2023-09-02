import { GET_USER_ALL, GET_USER_ID, GET_USER_NAME, FAILURE } from "./Users/Users"
import { GET_SONG_ALL, GET_SONG_ALL_QUERY, GET_SONG_ALL_QUERY_FILTER,GET_SONG_ID, GET_SONG_NAME,GET_SONG_NAME_FILTER } from "./Songs/Songs"

const initialState={
    generalUsers:[],
    copyusers:[],
    generalSongs:[],
    copySongs:[],
    detailSongs:[], 
    generalPlaylists:[],
    copyPlaylists:[],
}

const rootReducer=(state= initialState, action)=>{
    switch(action.payload){
        default: return {...state}
    }
}

export default rootReducer