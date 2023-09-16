import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { paymentAnual, paymentMensual } from "../../Redux/Actions/Mercadopago";
import { useNavigate } from "react-router-dom";

const ComprarPlanes = () => {
  const dispatch = useDispatch();
  const [mensual, setMensual] = useState(false);
  const [anual, setAnual] = useState(false);
  const navigate = useNavigate();

  const handlePayment = async (planType) => {
    try {
      const response =
        planType === "Mensual"
          ? await dispatch(paymentMensual("39191f53-f66f-4d0c-8c39-33fd8e34c8b5"))
          : await dispatch(paymentAnual("39191f53-f66f-4d0c-8c39-33fd8e34c8b5"));

      if (response) {
        // Redirige al usuario utilizando la URL almacenada en la respuesta
        window.location.href = response.redirect;
      }
    } catch (error) {
      console.error("Error en el pago:", error);
    }
  };

  const handleButtonClick = (name) => {
    if (name === "Mensual") {
      setMensual(!mensual);
      setAnual(false);
    } else {
      setAnual(!anual);
      setMensual(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-black to-gray-800">
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <p className="text-xl font-bold text-gray-800 mb-2">
          Selecciona tu plan
        </p>
        <div className="flex justify-center">
          <button
            className={`${
              mensual
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } px-4 py-2 rounded-md mr-2 focus:outline-none`}
            onClick={() => handleButtonClick("Mensual")}
            name="Mensual"
          >
            Mensual
          </button>
          <button
            className={`${
              anual
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } px-4 py-2 rounded-md ml-2 focus:outline-none`}
            onClick={() => handleButtonClick("Anual")}
            name="Anual"
          >
            Anual
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComprarPlanes;