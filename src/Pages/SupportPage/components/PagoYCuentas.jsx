import { Link } from "react-router-dom";
import BaseLayout from "../../../Components/BaseLayout";

export default function PagoYCuentas(){
    
    return (
        <BaseLayout>
 <div className="bg-[#e5e7eb] py-24 px-52">
        <h1 className="text-gray mt-16 font-bold text-center text-2xl mb-6">
        Cancelar suscripción o prueba de Spootchat
        </h1>
        <p>
        Si ya no quieres continuar tu suscripción o prueba con Spootchat, puedes cancelarla en cualquier momento.
        </p>
        <br/>
        <p>
        Si estás pagando por Spootchat a través de un tercero, tendrás que cancelarlo a través de ellos.
        </p>
        <br/>

        <p className="font-bold">
        Página web de Spootchat
        </p>
        <br/>

        <ul className="list-disc">
          <li>
          Inicia sesión con tu nombre de usuario y contraseña
          </li>
          <li>
          Ve a «Suscripción»
          </li>
          <li>
          Haz clic en «Cancelar suscripción» y confirma la cancelación
          </li>
          </ul>
        <br/>

          <h2 className="font-bold">Android</h2>
        <br/>

          <ul className="list-disc">
          <li>
          Haz clic en el corazón
          </li>
          <li>
          Haz clic en la esquina superior derecha
          </li>
          <li>
          Haz clic en «Editar» y luego en «Gestionar suscripción»
          </li>
          <li>Desplázate hacia abajo y haz clic en «Suscripción Cancelar Suscripción»</li>
        </ul>
        <br/>
        <h2 className="font-bold">Apple Wallet y iTunes</h2>
        <br/>

        <p>Si te registraste directamente desde tu iPhone y tu Apple Wallet muestra una cuenta.</p>
        <br/>


        <p>Haz clic aquí: Cancelación de Apple iTunes  Compras dentro de la App Si no ves una suscripción activa en Apple Wallet, significa que se te está facturando a través de otro método de pago. Puedes confirmar el estado de tu cuenta de Apple poniéndote en contacto directamente con el servicio de asistencia de Apple.</p>
        <br/>

        <h2 className="font-bold">Eliminar tu cuenta de Spootchat</h2>
        <br/>

        <p>Si quieres eliminar tu cuenta de Spootchat y tus datos personales, envía una solicitud de asistencia aquí y el equipo de Asistencia de Spootchat se pondrá en contacto contigo por correo electrónico para indicarte los pasos a seguir. Ten en cuenta que tenemos que hacerte algunas preguntas para confirmar tu identidad antes de procesar la solicitud de eliminación.</p>
        <p>La eliminación de datos personales revocará inmediatamente el acceso a tu cuenta de Spootchat, incluidas tus listas de reproducción, historial y datos de la cuenta. Tu cuenta de Spootchat y tus datos personales se eliminarán o se harán anónimos (es decir, se eliminarán los elementos que puedan identificarte) y no podrás volver a recuperar tu cuenta ni tus datos.</p>
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
    )
    
}
