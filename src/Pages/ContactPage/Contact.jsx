import React, { useState } from "react";
import axios from "axios";
import BaseLayout from "../../Components/BaseLayout";

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
        <div className="flex-grow my-40"> {/* Aumenta el margen superior aquí */}
          <div className="flex items-center justify-center">
            <div className="bg-white p-4 sm:p-8 rounded-md shadow-md flex flex-col sm:flex-row w-full max-w-screen-xl">
              <div className="w-full sm:w-1/2 sm:pr-4">
                <h1 className="text-3xl font-bold mb-4">ghf</h1>
                <p className="text-gray-700 mb-4">
                  Bienvenido a nuestra página de contacto. Estamos encantados de poder conectarnos contigo y ayudarte en lo que necesites. Tu opinión es muy importante para nosotros, así que no dudes en ponerte en contacto para hacernos saber tus preguntas, comentarios o sugerencias.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      className="w-full p-2 border rounded-md"
                      type="text"
                      name="name"
                      placeholder="Nombre"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="w-full p-2 border rounded-md"
                      type="email"
                      name="email"
                      placeholder="Correo"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      className="w-full p-2 border rounded-md"
                      name="message"
                      placeholder="Mensaje"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 w-full" type="submit">
                    Enviar Mensaje
                  </button>
                </form>
              </div>
              <div className="w-full sm:w-1/2 sm:pl-4 relative">
                <div className="relative">
                  <img
                    src="https://hiramnoriega.com/wp-content/uploads/2023/02/Copia-de-General-2023-02-09T111624.350.jpg"
                    alt="ImagenForm"
                    className="w-full h-auto rounded-lg overflow-hidden shadow-md"
                  />
                  <div className="absolute bg-white p-4 w-full max-w-md mx-auto -mt-16 rounded-md shadow-md">
                    <div className="flex items-center">
                      <img src="https://static.vecteezy.com/system/resources/thumbnails/006/827/459/small/email-icon-sign-symbol-logo-vector.jpg" alt="Email" className="w-8 h-8 mr-2" />
                      <p className="text-gray-700">
                        Correo electrónico: <a href="mailto:tu@email.com">tu@email.com</a>
                      </p>
                    </div>
                    <div className="flex items-center mt-2">
                      <img src="https://tokystorage.s3.amazonaws.com/company-pic/fad7c0fc408c27d78dff8f9ed83d2b7f-cover.png?v=1564178405" alt="Telefono" className="w-8 h-8 mr-2" />
                      <p className="text-gray-700">
                        Número de teléfono: <a href="tel:+123456789">+123 456 789</a>
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