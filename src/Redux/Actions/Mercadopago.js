import axios from '../../axiosConfig';

export const PAYMENT_MENSUAL = "PAYMENT_MENSUAL";
export const PAYMENT_ANUAL = "PAYMENT_ANUAL";

const performPayment = async (dispatch, paymentType, userId) => {
  try {
    const response = await axios.post(`premium/${paymentType}?userId=${userId}`);
    const data = response.data;

    dispatch({
      type: paymentType,
      payload: data,
    });

    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const paymentMensual = () => {
  return async (dispatch, getState) => {
    const { UserData } = getState(); // Accede a la información del usuario desde el estado global
    const userId = UserData.id; // Obtiene la ID del usuario

    return await performPayment(dispatch, PAYMENT_MENSUAL, userId);
  };
};

export const paymentAnual = () => {
  return async (dispatch, getState) => {
    const { UserData } = getState();
    const userId = UserData.id;

    return await performPayment(dispatch, PAYMENT_ANUAL, userId);
  };
};
