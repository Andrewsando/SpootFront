import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paymentAnual, paymentMensual } from "../../Redux/Actions/Mercadopago";
import { Link } from "react-router-dom";
import BaseLayout from "../LandingPage/components/BaseLayout";
import logo from './../../../public/images/spotify.png';
import { getUserId } from "../../Redux/Actions/Users";

const ComprarPlanes = () => {
  const dispatch = useDispatch();
  const [selectedPlan, setSelectedPlan] = useState(""); // Agregamos un estado para el plan seleccionado
  const user = useSelector((state) => state.generalUsers);
  const id = useSelector((state) => state.UserData.id); // Asegurarse de obtener el id correctamente
  const premium= user.result.premium
  

  useEffect(() => {
    // Llama a getUserId para obtener el id del usuario
    dispatch(getUserId(id));
  }, [dispatch, id]); // Agrega userId como dependencia

  const redirectToMercadoPago = async () => {
    try {
      if (selectedPlan === "Mensual") {
        const response = await dispatch(paymentMensual(id));
        if (response && response.redirect) {
          window.location.href = response.redirect;
        }
      } else if (selectedPlan === "Anual") {
        const response = await dispatch(paymentAnual(id));
        if (response && response.redirect) {
          window.location.href = response.redirect;
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return premium === true? (
    <div className="flex flex-col items-center justify-center h-screen">
    <p className="text-2xl font-bold text-green-500 mb-4">Ya eres premium</p>
    <Link to="/premium">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Volver
      </button>
    </Link>
  </div>
  ) : (
    <BaseLayout>
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-black to-gray-800 text-lg text-white">
        <img src={logo} alt="Logo" className="object-cover h-20 w-20 mt-20" />
        <h1 className="text-4xl m-2 text-[#54E360] font-bold">SpootChat Premium</h1>
        <h2 className="m-2">Estás a un paso de obtener todos los beneficios que quieras!</h2>
        <div className="bg-white p-4 rounded-lg shadow-md my-4">
          <p className="text-2xl font-bold text-black p-3">
            Selecciona tu plan
          </p>
          <div className="flex justify-center text-black">
            <div className="p-3 my-4 mr-16">
              <h1 className="text-[#54E360] font-bold text-2xl my-2">MENSUAL</h1>
              <p className="font-bold">$100<span className="font-normal">USD</span></p>
              <p className="text-xs">*Cancela cuando quieras</p>
              <button
                className={`${selectedPlan === 'Mensual' ? 'bg-[#54E360] hover:bg-[#00B44B]' : 'bg-[#A0AEC0]'} px-4 py-2 rounded-lg my-4 shadow-lg`}
                onClick={() => setSelectedPlan("Mensual")}
              >
                Comprar
              </button>
            </div>
            <div className="p-3 my-4 ml-16">
              <h1 className="text-[#54E360] font-bold text-2xl my-2">ANUAL</h1>
              <p className="font-bold">$1.000<span className="font-normal">USD</span></p>
              <p className="text-xs">*Ahorra un 20% por año</p>
              <button
                className={`${selectedPlan === 'Anual' ? 'bg-[#54E360] hover.bg-[#00B44B]' : 'bg-[#A0AEC0]'} px-4 py-2 rounded-lg my-4 shadow-lg`}
                onClick={() => setSelectedPlan("Anual")}
              >
                Comprar
              </button>
            </div>
          </div>
          <p className="text-xs font-thin text-black p-3">**Compra protegida por <span className="font-bold">MercadoPago</span></p>
          <button
            onClick={redirectToMercadoPago}
            className="bg-[#54E360] hover:bg-[#00B44B] px-4 py-2 rounded-lg my-4 shadow-lg"
          >
            Ir a MercadoPago
          </button>
          {selectedPlan && (
            <Link to="/premium">
              <button>Volver</button>
            </Link>
          )}
        </div>
      </div>
    </BaseLayout>
  );
};

export default ComprarPlanes;
