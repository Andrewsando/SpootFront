import axios from '../../axiosConfig'

export const GET_PLAYLISTS='GET_PLAYLISTS'
export const GET_PLAYLIST_ID='GET_PLAYLIST_ID'
export const GET_PLAYLIST_NAME='GET_PLAYLIST_NAME'
export const DELETE_PLAYLISTS='DELETE_PLAYLISTS'
export const CREATE_PLAYLISTS='CREATE_PLAYLISTS'

export const getPlaylists=()=>{
  return async function(dispatch){
    try {
      const res= await axios.get('https://backend-pf-production-ba15.up.railway.app/playlists')
      dispatch({type: GET_PLAYLISTS, payload: res.data});
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
    }
  }
}

export const getPlaylistID = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`https://backend-pf-production-ba15.up.railway.app/playlists/${id}`);
      dispatch({ type: GET_PLAYLIST_ID, payload: res.data });
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
    }
  }
}

export const getPlaylistName=(name)=>{
  return async function (dispatch){
    try {
      const res= await axios.get(`https://backend-pf-production-ba15.up.railway.app/playlists?name=${name}`);
      dispatch({type:GET_PLAYLIST_NAME, payload: res.data});
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
    }
  }
}

export const putPlayist=(id, dataPlaylist)=>{
  return async function (dispatch){
    try {
      await axios.put(`https://backend-pf-production-ba15.up.railway.app/playlists/${id}`, dataPlaylist);
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
    }
  }
}

export const createPlaylist=(form)=>{
  return async function (dispatch){
    try {
      const {data}= await axios.post('https://backend-pf-production-ba15.up.railway.app/playlists', form)
      dispatch({type:CREATE_PLAYLISTS, payload:data})
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
    }
  }
}

export const deletePlaylist=(id)=>{
  return async function (dispatch){
    try {
      const {data} = await axios.delete(`https://backend-pf-production-ba15.up.railway.app/playlists/${id}`)
      dispatch({type: DELETE_PLAYLISTS, payload: data});
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
    }
  }
}