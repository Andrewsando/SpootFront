import axios from "axios"

export const PAYMENT_MENSUAL = "PAYMENT_MENSUAL"
export const PAYMENT_ANUAL = "PAYMENT_ANUAL"

export const paymentMensual = (userId)=>{
    try {
        const data = axios.post(`http://backend-pf-production-ba15.up.railway.app/premium/mensual?userId=${userId}`);

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

export const paymentAnual = (userId)=>{
    try {
        const data = axios.post(`http://backend-pf-production-ba15.up.railway.app/premium/anual?userId=${userId}`);

        console.log(data);
    } catch (error) {
        
    }
}