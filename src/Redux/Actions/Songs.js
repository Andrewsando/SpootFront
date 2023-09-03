import axios from "axios";

export const FAILURE = "FAILURE";
export const GET_SONG_ALL = "GET_SONG_ALL";
export const GET_SONG_ALL_QUERY = "GET_SONG_ALL_QUERY";
export const GET_SONG_NAME = "GET_SONG_NAME";
export const GET_SONG_ID = "GET_SONG_ID";
export const GET_SONG_GENRE = "GET_SONG_GENRE"
export const GET_SONG_ALL_QUERY_FILTER = "GET_SONG_ALL_QUERY_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER"

export const getSongAll = (page, perpage) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(
        `http://localhost:4322/song?page=${page * perpage}&onPage=${perpage}`
      );
      dispatch({ type: GET_SONG_ALL, payload: res.data });
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
    }
  };
};

export const getSongName = (name) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(
        `http://localhost:4322/song/name?name=${name}`
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
      const res = await axios.get(`http://localhost:4322/song/${id}`);
      dispatch({ type: GET_SONG_ID, payload: res.data });
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
    }
  };
};

export const putSong = (id, songData) => {
  return async function (dispatch) {
    try {
      await axios.put(`http://localhost:4322/song/${id}`, songData);
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
    }
  };
};

export const filterGenre = (genre) => {
  return async function (dispatch){
    try {
      let data
      if(genre == "All"){
        data = genre
        dispatch({type: GET_SONG_GENRE, payload: data})
      }
      else{
        const response = await axios(`http://localhost:4322/song?genre=${genre}`)
        data = response.data
        dispatch({type: GET_SONG_GENRE, payload: data})
      }
    } catch (error) {
       dispatch({ type: FAILURE, payload: error.message });
    }
  }
}

export const clearFilter = () =>{
  return function (dispatch){
    dispatch({type: CLEAR_FILTER})
  }
}



