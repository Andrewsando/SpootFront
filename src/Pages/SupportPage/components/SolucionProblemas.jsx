import { Link } from "react-router-dom";
import BaseLayout from "../../../Components/BaseLayout";

export default function SolucionProblemas(){
    return (
        <BaseLayout>
  <div className="bg-[#e5e7eb] py-24 px-52">
        <h1 className="text-gray mt-16 font-bold text-center text-2xl mb-6">
        Problemas de reproducción
        </h1>
        <p>
        Si tienes problemas con la reproducción en Spootchat, puedes seguir estos pasos básicos para intentar resolverlos.
        </p>
        <br/>

        <ul className="list-disc">
          <li>
          Asegúrate de que la aplicación Spootchat esté actualizada.
          </li>
          <li>
          Fuerza el cierre y reinicia Spootchat.
          </li>
          <li>
          Limpia la memoria caché.
          </li>
          <li>
          Reproduce el contenido seleccionado en otro dispositivo o en listen.Spootchat.com.
          </li>
          <li>
            Pulsa el botón X cuando estés preparado para finalizar la sesión en
            directo.
          </li>
          <li>
          Reproduce el tema con otra conexión de red. (WiFi, conexión de datos)
          </li>
        </ul>
        <br/>

        <p>Si el problema no se produce en otro dispositivo, entonces podría deberse a la conexión de datos, la configuración o el hardware del dispositivo afectado. Si no se produce en otra red, eso indica que podría estar relacionado con la red original a la que estabas conectado y no con Spootchat.</p>
        <br/>

        <p>Sería útil que proporcionaras al Servicio de Asistencia el enlace al contenido con el que has tenido el problema. Para encontrar el enlace al contenido, selecciona el elemento, haz click con el botón derecho, selecciona compartir y copia el enlace de la canción.</p>
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
