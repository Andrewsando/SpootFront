import axios from '../../axiosConfig';
import { useSelector } from 'react-redux'; 

export const PAYMENT_MENSUAL = "PAYMENT_MENSUAL";
export const PAYMENT_ANUAL = "PAYMENT_ANUAL";

export const paymentMensual = () => {
  return async (dispatch) => {
    try {
      const user = useSelector((state) => state.UserData); // Accede a la información del usuario desde el estado global
      const userId = user.id; // Obtiene la ID del usuario

      const response = await axios.post(`premium/mensual?userId=${userId}`);
      const data = response.data;

      dispatch({
        type: PAYMENT_MENSUAL,
        payload: data,
      });

      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
};

export const paymentAnual = () => {
  return async (dispatch) => {
    try {
      const user = useSelector((state) => state.UserData); // Accede a la información del usuario desde el estado global
      const userId = user.id; // Obtiene la ID del usuario

      const response = await axios.post(`premium/anual?userId=${userId}`);
      const data = response.data;

      dispatch({
        type: PAYMENT_ANUAL,
        payload: data,
      });

      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
};
