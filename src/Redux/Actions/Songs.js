import axios from "../../axiosConfig";

export const POST_SONG = 'POST_SONG'
export const FAILURE = "FAILURE";
export const GET_SONG_ALL = "GET_SONG_ALL";
export const GET_SONG_NAME = "GET_SONG_NAME";
export const GET_SONG_ID = "GET_SONG_ID";
export const GET_SONG_GENRE = "GET_SONG_GENRE";
export const GET_SONG_ARTIST = "GET_SONG_ARTIST";
export const GENRE_PLUS_ARTIST='GENRE_PLUS_ARTIST'
export const CLEAR_FILTER = "CLEAR_FILTER";
export const SORT_SONGS_BY_DATE='SORT_SONGS_BY_DATE'
export const GENEROS_SONGS='GENEROS_SONGS'
export const EDIT_SONG='EDIT_SONG'


export const getSongAll = (page, perpage) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(
        `http://backend-pf-production-ba15.up.railway.app/song?page=${page}&perPage=${perpage}`
      );
      dispatch({ type: GET_SONG_ALL, payload: res.data });
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
      console.log(error)
    }
  };
};

export const getSongName = (name) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://backend-pf-production-ba15.up.railway.app/song/name?name=${name}`
      );
      dispatch({ type: GET_SONG_NAME, payload: res.data });
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
    }
  };
};

export const getSongId = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://backend-pf-production-ba15.up.railway.app/song/${id}`);
      dispatch({ type: GET_SONG_ID, payload: res.data });
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
    }
  };
};

export const postSong = (form) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(`http://backend-pf-production-ba15.up.railway.app/song/post`, form);
      dispatch({ type: POST_SONG, payload: data });
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
    }
  };
};
export const editSong = (form) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.put(`http://backend-pf-production-ba15.up.railway.app/song/post`, form);
      dispatch({ type: EDIT_SONG, payload: data });
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
    }
  };
};

export const putSong = (id, songData) => {
  return async function (dispatch) {
    try {
      await axios.put(`http://backend-pf-production-ba15.up.railway.app/song/${id}`, songData);
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
    }
  };
};
//Crear una funcion en donde se compare los datos recibidos por parametro y
//se devuelvan actions en funcion a eso
export const ActionsHandler = (genre, artist, page, perpage) => {
  return async function (dispatch) {
    try {
     if( genre!=='All' && artist===''){
      const {data}=await axios.get(`http://backend-pf-production-ba15.up.railway.app/song?genre=${genre}&page=${page}&perpage=${perpage}`)
      dispatch({type:GET_SONG_GENRE, payload:data});
     }
     else if(genre==='All' && artist!==''){
      const {data}= await axios.get(`http://backend-pf-production-ba15.up.railway.app/song?artist=${artist}&page=${page}&perpage=${perpage}`)
      dispatch({type:GET_SONG_ARTIST, payload:data});
     }
     else if(genre!=='All'&& artist!==''){
      const {data}=await axios.get(`http://backend-pf-production-ba15.up.railway.app/song?artist=${artist}&genre=${genre}&page=${page}&perpage=${perpage}`)
      dispatch({type:GENRE_PLUS_ARTIST, payload:data});
     }
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
    }
  };
};

export const generosSongs=(page, perpage)=>{
  return async function (dispatch){
    const {data}= await axios.get(`http://backend-pf-production-ba15.up.railway.app/song?page=${page}&perPage=${perpage}`)
    dispatch ({type: GENEROS_SONGS, payload: data});
  }
}

export const sortSongsByDate = () => {
  return { type: SORT_SONGS_BY_DATE };
}

export const clearFilter = () => {
  return function (dispatch) {
    dispatch({ type: CLEAR_FILTER });
  };
};
