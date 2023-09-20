import axios from '../../axiosConfig'
export const FAILURE = "FAILURE";
export const GET_USER_ID = "GET_USER_ID";
export const LOGIN_USER = "LOGIN_USER";
export const DELETE_USER = "DELETE_USER";
export const SET_USER = 'SET_USER';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILURE = 'RESET_PASSWORD_FAILURE';

export const getUserId = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`users/${id}`);
      dispatch({ type: GET_USER_ID, payload: res.data });
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
    }
  };
};

export const deleteUser = (id) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.delete(`users/${id}`);
      dispatch({ type: DELETE_USER, payload: data });
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
    }
  };
};

export const putUser = (id, userData) => {
  return async function (dispatch) {
    try {
      await axios.put(`users/${id}`, userData);
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
    }
  };
};

/* export const LoginUser = (data) => {
  return async function (dispatch) {
    try {

      const res = await axios.post(`users/login`, data)

      console.log(res);
      dispatch({ type: LOGIN_USER, payload: res.data })
    } catch (error) {
      console.log(error);
      dispatch({ type: FAILURE, payload: error.message });
    }
  }
} */

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post("users/login", userData);
    dispatch({ type: LOGIN_USER, payload: response.data });
  } catch (error) {
    dispatch({ type: FAILURE, payload: error.message });
  }
};

export const setUser = (userData) => ({
  type: SET_USER,
  payload: userData,
})

export const resetPassword = (email, password) => async (dispatch) => {
  dispatch({ type: RESET_PASSWORD_REQUEST });

  try {
    const response = await axios.put(
      `users/password?email=${email}&password=${password}`
    );

    if (response.data.result === false) {
      dispatch({ type: RESET_PASSWORD_FAILURE, error: response.data.error });
    } else {
      dispatch({ type: RESET_PASSWORD_SUCCESS, payload: response.data });
    }
  } catch (error) {
    dispatch({ type: RESET_PASSWORD_FAILURE, error: error.message });
  }
};

export const postUser = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `users/register`,
        //`http://backend-pf-production-ba15.up.railway.app/users/register`,
        //`http://backend-pf-production-ba15.up.railway.app/users`,
        payload
      );
      return response;
    } catch (error) {
      // console.log(error.message);
      dispatch({ type: FAILURE, payload: error.message });
    }
  };
};