import { Link } from "react-router-dom";
import BaseLayout from "../../../Components/BaseLayout";

export default function ComoFunciona() {
  return (
    <BaseLayout>
      <div className="bg-[#e5e7eb] py-24 px-52">
        <h1 className="text-gray mt-16 font-bold text-center text-2xl mb-6">
          Registrarte en Spootchat
        </h1>
        <h2 className="text-gray font-bold my-8">
          Regístrate con tu dirección de correo electrónico
        </h2>
        <p>
          Rellena el campo de correo electrónico y crea una contraseña en la
          página de registro, luego haz clic en Continuar. Esto te llevará a la
          visión general de la cuenta, ahora puedes seleccionar tu suscripción,
          añadir un método de pago o vale, o ver los recibos y las compras.
        </p>
        <h2 className="text-gray font-bold my-8">
          Regístrate con tu cuenta de Google
        </h2>
        <p>
          Haz clic en Google y luego inicia sesión en Google cuando se te
          indique. Después de iniciar sesión, haz clic en Continuar y luego ve a
          la página del método de pago. Introduce tu método de pago y haz clic
          en Continuar.
          <br />
          <br />
          Si tu correo electrónico se ha utilizado anteriormente para una
          cuenta, puedes ir aquí para recuperarlo:
          www.Spootchat.com/reset-password *Las pruebas gratuitas son solo para
          nuevos usuarios.
          <br />
          <br />
          Si ya has probado nuestros servicios y tenías una cuenta antes, no
          eres elegible para otra Prueba gratuita.
        </p>

        <h1 className="text-gray mt-16 font-bold text-center text-2xl mb-6">
          ¿No puedes encontrar lo que estás buscando?
        </h1>
        <div className="text-center">
          <Link to="/contact-us" className="home-button mt-11">
            <button type="button" className="font-bold">
              Contáctanos
            </button>
          </Link>
        </div>
      </div>
    </BaseLayout>
  );
}
