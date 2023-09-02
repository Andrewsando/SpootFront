import axios from "axios";

export const GET_PLAYLISTS='GET_PLAYLISTS'
export const GET_PLAYLIST_ID='GET_PLAYLIST_ID'
export const GET_PLAYLIST_NAME='GET_PLAYLIST_NAME'
export const FAILURE='FAILURE'

export const getPlaylists=()=>{
  return async function(dispatch){
    try {
      const res= await axios.get('http://localhost:3001/playlists')
      dispatch({type: GET_PLAYLISTS, payload: res.data});
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
    }
  }
}

export const getPlaylistID=(id)=>{
  return async function (dispatch){
    try {
      const res = await axios.get(`http://localhost:3001/playlists/${id}`);
      dispatch({type: GET_PLAYLIST_ID, payload: res.data});
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
    }
  }
}

export const getPlaylistName=(name)=>{
  return async function (dispatch){
    try {
      const res= await axios.get(`http://localhost:3001/playlists?name=${name}`);
      dispatch({type:GET_PLAYLIST_NAME, payload: res.data});
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
    }
  }
}

export const putPlayist=(id, dataPlaylist)=>{
  return async function (dispatch){
    try {
      await axios.put(`http://localhost:3001/playlists/${id}`, dataPlaylist);
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
    }
  }
}

export const deletePlaylist=(id)=>{
  return async function (dispatch){
    try {
      await axios.delete(`http://localhost:3001/playlists/${id}`)
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
    }
  }
}