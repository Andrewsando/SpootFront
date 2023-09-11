import axios from "axios";

export const FAILURE = "FAILURE";
export const GET_USER_ID = "GET_USER_ID";
export const LOGIN_USER = "LOGIN_USER";
export const DELETE_USER= "DELETE_USER";

export const getUserId = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://backend-pf-production-ba15.up.railway.app/users/${id}`);
      dispatch({ type: GET_USER_ID, payload: res.data });
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
    }
  };
};

export const deleteUser = (id) => {
  return async function (dispatch) {
    try {
      const {data} = await axios.delete(`http://backend-pf-production-ba15.up.railway.app/users/${id}`);
      dispatch({ type: DELETE_USER, payload: data});
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
    }
  };
};

export const putUser = (id, userData) => {
  return async function (dispatch) {
    try {
      await axios.put(`http://backend-pf-production-ba15.up.railway.app/users/${id}`, userData);
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
    }
  };
};

export const LoginUser=({email, password})=>{
  console.log(email, password);
  return async function(dispatch){
    try {
      const res=await axios.post(`http://localhost:4322/users/login`, data)
      console.log(res);
      dispatch({type:LOGIN_USER, payload:res.data})
    } catch (error) {
      console.log(error);
      dispatch({ type: FAILURE, payload: error.message });
    }
  }
}

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:4322/users/login", userData);
    dispatch({ type: LOGIN_USER, payload: response.data });
  } catch (error) {
    dispatch({ type: FAILURE, payload: error.message });
  }
};
