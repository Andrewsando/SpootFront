import axios from "../../axiosConfig";

const BASE_URL = "http://localhost:4322/playlists"; 

const makeRequest = async (dispatch, requestAction, successAction, failureAction, requestFn) => {
  dispatch({ type: requestAction });

  try {
    const response = await requestFn();
    dispatch({ type: successAction, payload: response.data });
  } catch (error) {
    dispatch({ type: failureAction, payload: error.message });
  }
};

export const fetchPlaylists = (page, perPage) => async (dispatch) => {
  const requestFn = () => axios.get(`${BASE_URL}?page=${page}&perPage=${perPage}`);
  makeRequest(dispatch, FETCH_PLAYLISTS_REQUEST, FETCH_PLAYLISTS_SUCCESS, FETCH_PLAYLISTS_FAILURE, requestFn);
};

export const fetchPlaylistById = (id) => async (dispatch) => {
  const requestFn = () => axios.get(`${BASE_URL}/${id}`);
  makeRequest(dispatch, FETCH_PLAYLIST_BY_ID_REQUEST, FETCH_PLAYLIST_BY_ID_SUCCESS, FETCH_PLAYLIST_BY_ID_FAILURE, requestFn);
};

export const fetchPlaylistsByName = (name, page, perPage) => async (dispatch) => {
  const requestFn = () => axios.get(`${BASE_URL}?name=${name}&page=${page}&perPage=${perPage}`);
  makeRequest(dispatch, FETCH_PLAYLISTS_BY_NAME_REQUEST, FETCH_PLAYLISTS_BY_NAME_SUCCESS, FETCH_PLAYLISTS_BY_NAME_FAILURE, requestFn);
};

export const addPlaylist = (name, description) => async (dispatch) => {
  const requestFn = () => axios.post(BASE_URL, { name, description });
  makeRequest(dispatch, ADD_PLAYLIST_REQUEST, ADD_PLAYLIST_SUCCESS, ADD_PLAYLIST_FAILURE, requestFn);
};

export const updatePlaylist = (id, name, description) => async (dispatch) => {
  const requestFn = () => axios.put(`${BASE_URL}/${id}`, { name, description });
  makeRequest(dispatch, UPDATE_PLAYLIST_REQUEST, UPDATE_PLAYLIST_SUCCESS, UPDATE_PLAYLIST_FAILURE, requestFn);
};

export const deletePlaylist = (id) => async (dispatch) => {
  const requestFn = () => axios.delete(`${BASE_URL}/${id}`);
  makeRequest(dispatch, DELETE_PLAYLIST_REQUEST, DELETE_PLAYLIST_SUCCESS, DELETE_PLAYLIST_FAILURE, requestFn);
};
