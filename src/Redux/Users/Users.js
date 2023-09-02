import axios from 'axios';

export const FAILURE= 'FAILURE';
export const GET_USER_ALL='GET_USER_ALL';
export const GET_USER_NAME='GET_USER_NAME';
export const GET_USER_ID='GET_USER_ID';


export const getUserAll=()=>{
    return async function (dispatch){
        try {
            const res= await axios.get('http://localhost:4322/users')
            dispatch({type: GET_USER_ALL, payload:res.data});
        } catch (error) {
            dispatch({type: FAILURE, payload:error.message});
        }
    }
}

export const getUserName=(name)=>{
    return async function (dispatch){
 try {
    const res= await axios.get(`http://localhost:4322/users?username=${name}`)
    dispatch({type: GET_USER_NAME, payload:res.data});
 } catch (error) {
    dispatch({type: FAILURE, payload:error.message});
 }
    }
}

export const getUserId=(id)=>{
    return async function (dispatch){
        try {
            const res= await axios.get(`http://localhost:4322/users/${id}`)
            dispatch({type: GET_USER_ID, payload:res.data});
        } catch (error) {
            dispatch({type: FAILURE, payload:error.message});
        }
    }
}

export const deleteUser=(id)=>{
    return async function (dispatch){
   try {
    await axios.delete(`http://localhost:4322/users/${id}`)
   } catch (error) {
    dispatch({type: FAILURE, payload:error.message});
   }
    }
}

export const putUser = (id, userData) => {
    return async function(dispatch) {
        try {
             await axios.put(`http://localhost:4322/users/${id}`, userData);

        } catch (error) {
            dispatch({ type: FAILURE, payload: error.message });
        }
    };
};