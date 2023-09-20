import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paymentAnual, paymentMensual } from "../../Redux/Actions/Mercadopago";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import BaseLayout from "../LandingPage/components/BaseLayout";
import logo from './../../../public/images/spotify.png';


const ComprarPlanes = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user); // Cambia el selector a "user"
  const id = "39191f53-f66f-4d0c-8c39-33fd8e34c8b5";
  const [mensual, setMensual] = useState(false);
  const [anual, setAnual] = useState(false);
  const navigate = useNavigate(); // Obtén la función de navegación

  useEffect(() => {
    if (user.isPremium) { // Valida si el usuario es premium
      navigate("/user"); // Redirige al usuario a la página de usuario si ya es premium
    }
  }, [user.isPremium, navigate]);

  useEffect(() => {
    if (mensual) {
      dispatch(paymentMensual(id)).then((response) => {
        if (response) {
          window.location.href = response.redirect
        }
      });
    }
  }, [mensual]);

  useEffect(() => {
    if (anual) {
      dispatch(paymentAnual(id)).then((response) => {
        console.log();
        if (response) {
          window.location.href = response.redirect
        }
      });
    }
  }, [anual]);

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
    <BaseLayout>
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-black to-gray-800 text-lg text-white">
        {user && console.log(user)}
        <img src={logo} alt="" srcset="" className="object-cover h-20 w-20 mt-20" />
        <h1 className="text-4xl m-2 text-[#54E360] font-bold">SpootChat Premium</h1>
        <h2 className="m-2">Estas a un paso de obtener todos los beneficios que quieras!</h2>
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
                className={`${mensual} bg-[#54E360] hover:bg-[#00B44B] px-4 py-2 rounded-lg my-4 shadow-lg`}
                onClick={() => handleButtonClick("Mensual")}
                name="Mensual"
              >
                Comprar
              </button>
            </div>
            <div className="p-3 my-4 ml-16">
              <h1 className="text-[#54E360] font-bold text-2xl my-2">ANUAL</h1>
              <p className="font-bold">$1.000<span className="font-normal">USD</span></p>
              <p className="text-xs">*Ahorra un 20% por año</p>
              <button
                className={`${anual} bg-[#54E360] hover:bg-[#00B44B] px-4 py-2 rounded-lg my-4 shadow-lg`}
                onClick={() => handleButtonClick("Anual")}
                name="Anual"
              >
                Comprar
              </button>
            </div>

          </div>
          <p className="text-xs font-thin text-black p-3">**Compra protegida por <span className="font-bold">MercadoPago</span></p>
        </div>
      </div>
    </BaseLayout>

  );
};

export default ComprarPlanes;
