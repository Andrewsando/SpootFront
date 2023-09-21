import React, { useState } from "react";
import axios from '../../axiosConfig';

import BaseLayout from "../../Components/BaseLayout";
import "./styles/Contact.css";

export default function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const[sent, setSent] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setSent(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await axios.post("/api/contact", formData);
      setSent(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      })
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gradient-to-l from-[#141921] to-[#000000] min-h-screen flex flex-col justify-between">
      <BaseLayout>
        <div className="flex-grow my-40">
          <div className="flex items-center justify-center">
            <div className="bg-[#1c2026] p-4 sm:p-10 rounded-md shadow-md flex flex-col sm:flex-row w-full max-w-screen-xl">
              <div className="w-full sm:w-1/2 sm:pr-4">
                <div className="contactImgTitle">
                  <img
                    src="/images/atencion-al-cliente.png"
                    alt="ImagenForm"
                    className="imageContact"
                  />
                  <h1 className="text-4xl text-[#fff] font-bold">Bienvenido</h1>
                </div>
                <p className="text-white mb-4">
                  Estamos encantados de poder conectarnos contigo y ayudarte en
                  lo que necesites. Tu opinión es muy importante para nosotros,
                  así que no dudes en ponerte en contacto para hacernos saber
                  tus preguntas, comentarios o sugerencias.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      className="contact-input"
                      type="text"
                      name="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="contact-input"
                      type="email"
                      name="email"
                      placeholder="Tu e-mail"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      className="text-white w-full p-2 mt-3 mb-1 border-green-500 border rounded-md bg-[#00000047] focus:outline-none"
                      name="message"
                      placeholder="Cuéntanos cómo podemos ayudarte"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    className="bg-[#1ed760] font-bold text-black p-2 rounded-md hover:bg-[#18b54f] w-full"
                    type="submit"
                  >
                    Enviar
                  </button>
                  {sent && (
                    <p className="text-white mb-4">
                      Correo Enviado ...!
                    </p>
                    ) }
                </form>
              </div>
              <div className="w-full mt-9 sm:w-1/2 sm:pl-4 relative">
                <div className="relative">
                  <img
                    src="/images/musica-linea-computadora-portatil.jpg"
                    alt="ImagenForm"
                    className="w-full h-auto rounded-lg overflow-hidden shadow-md"
                  />
                  <div className="absolute bg-[#FFFFFF] p-4 w-full max-w-md mx-auto -mt-16 rounded-md shadow-md">
                    <div className="flex items-center cursor-default">
                      <i className="material-icons icon-margin">email</i>
                      <p className="text-black">
                        <a href="mailto:tu@email.com">info.spootchat@gmail.com</a>
                      </p>
                    </div>
                    <div className="flex items-center mt-2 cursor-default">
                      <i className="material-icons icon-margin">phone</i>
                      <p className="text-black">
                        <a href="tel:+123456789">+00 000 000 00</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    </div>
  );
}
