import React, { useState } from "react";
import axios from "axios";
import BaseLayout from "../../Components/BaseLayout";
import "../../Styles/Contact.css";

export default function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/contact", formData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <BaseLayout>
        <div className="flex-grow my-40">
          <div className="flex items-center justify-center">
            <div className="bg-[#90909037] p-4 sm:p-8 rounded-md shadow-md flex flex-col sm:flex-row w-full max-w-screen-xl">
              <div className="w-full sm:w-1/2 sm:pr-4">
                <h1 className="text-3xl text-[#54e360] font-bold mb-4">
                  Contáctanos
                </h1>
                <p className="text-white mb-4">
                  Bienvenido a nuestra página de contacto.
                  <br />
                  <br /> Estamos encantados de poder conectarnos contigo y
                  ayudarte en lo que necesites. Tu opinión es muy importante
                  para nosotros, así que no dudes en ponerte en contacto para
                  hacernos saber tus preguntas, comentarios o sugerencias.
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
                        <a href="mailto:tu@email.com">spootchat@hotmail.com</a>
                      </p>
                    </div>
                    <div className="flex items-center mt-2 cursor-default">
                      <i className="material-icons icon-margin">phone</i>
                      <p className="text-black">
                        <a href="tel:+123456789">+123 456 789</a>
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
