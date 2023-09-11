import axios from "axios"

export const PAYMENT_MENSUAL = "PAYMENT_MENSUAL";
export const PAYMENT_ANUAL = "PAYMENT_ANUAL";



export const paymentMensual = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`https://backend-pf-production-ba15.up.railway.app/premium/mensual?userId=${userId}`);
      const data = response.data;

      dispatch({
        type: PAYMENT_MENSUAL,
        payload: data,
      });
      console.log(data);
      return data
    } catch (error) {
      console.log(error);
    }
  };
};


export const paymentAnual = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`https://backend-pf-production-ba15.up.railway.app/premium/anual?userId=${userId}`);
      const data = response.data;

      dispatch({
        type: PAYMENT_ANUAL,
        payload: data, 
      });
      console.log(data);
      return data
    } catch (error) {
      console.log(error);
    }
  };
};
