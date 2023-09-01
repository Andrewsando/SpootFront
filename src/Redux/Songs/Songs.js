import axios from "axios";

export const FAILURE='FAILURE';
export const GET_SONG_ALL='GET_SONG_ALL';
export const GET_SONG_ALL_QUERY='GET_SONG_ALL_QUERY';
export const GET_SONG_NAME='GET_SONG_NAME';
export const GET_SONG_ID='GET_SONG_ID';
export const GET_SONG_NAME_FILTER='GET_SONG_NAME_FILTER';
export const GET_SONG_ALL_QUERY_FILTER='GET_SONG_ALL_QUERY_FILTER';

export const getSongAll=(page, perpage)=>{
    return async function (dispatch){
        try {
            const res= await axios.get(`http://localhost:4322/song?page=${page * perpage}&perPage=${perpage}`)
            dispatch({type: GET_SONG_ALL, payload: res.data})
        } catch (error) {
            dispatch({ type: FAILURE, payload: error.message });
        }
    }
}

export const getSongAllQuery=(page, perpage)=>{
    return async function (dispatch){
        try {
            const res = await axios.get(`http://localhost:4322/song?page=${page * perpage}&perPage=${perpage}`)
            dispatch({type: GET_SONG_ALL_QUERY, payload: res.data});
        } catch (error) {
            dispatch({ type: FAILURE, payload: error.message });
        }
    }
}

export const getSongName=(name) => {
    return async function (dispatch){
        try {
           const res= await axios.get(`http://localhost:4322/song/name?name=${name}`);
           dispatch({type: GET_SONG_NAME, payload: res.data}); 
        } catch (error) {
            dispatch({ type: FAILURE, payload: error.message });
        }
    }
}

export const getSongId=(id)=>{
    return async function (dispatch){
        try {
            const res= await axios.get(`http://localhost:4322/song/${id}`);
            dispatch({type: GET_SONG_ID, payload: res.data});
        } catch (error) {
            dispatch({ type: FAILURE, payload: error.message });
        }
    }
}

export const putSong=(id, songData)=>{
    return async function (dispatch){
        try {
            await axios.put(`http://localhost:4322/song/${id}`, songData);
        } catch (error) {
            dispatch({ type: FAILURE, payload: error.message });  
        }
    }
}

export const getSongNameFilter=(name, genre, artist)=>{
    return async function (dispatch) {
        try {
            const res= await axios.get(`http://localhost:4322/song/name?name=${name}&genre=${genre}&artist=${artist}`)
            dispatch({type:GET_SONG_NAME_FILTER, payload:res.data});
        } catch (error) {
            dispatch({ type: FAILURE, payload: error.message });  
        }
    }
}

export const getSongqueryFilter=(page, perpage, genre, artist)=>{
return async function (dispatch){
    try {
        const res= await axios.get(`http://localhost:4322/song?page=${page *perpage}&perPage=${perpage}&genre=${genre}&artist=${artist}`)
        dispatch({type:GET_SONG_ALL_QUERY_FILTER, payload:res.data});
    } catch (error) {
        dispatch({ type: FAILURE, payload: error.message });  
    }
}
}