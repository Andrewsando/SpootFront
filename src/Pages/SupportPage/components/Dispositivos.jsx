import { Link } from "react-router-dom";
import BaseLayout from "../../../Components/BaseLayout";

export default function Dispositivos() {
  return (
    <BaseLayout>
      <div className="bg-[#e5e7eb] py-24 px-52">
        <h1 className="text-gray mt-16 font-bold text-center text-2xl mb-6">
          Bluesound
        </h1>
        <p>
          Para reproducir Spootchat en tus dispositivos Bluesound, puedes usar
          Spootchat Connect desde la aplicación Spootchat. Para reproducir
          Spootchat en tus dispositivos Bluesound a través de la aplicación
          BluOS, sigue las instrucciones que encontrarás a continuación.
        </p>
        <br />
        <p>
          Actualiza todos los reproductores Bluesound a la versión de firmware
          de BluOS 1.12.x o superior para disfrutar de Spootchat. También visita
          www.bluesound.com/downloads para obtener las actualizaciones más
          recientes de las aplicaciones Bluesound Controller para iOS, Android,
          Kindle Fire, Mac y PC.
        </p>
        <br />
        <p>
          Abre el panel de navegación de la izquierda en la aplicación Bluesound
          Controller. Desplázate hasta la parte inferior y pulsa "Configurar
          reproductor" y luego "Configurar servicios de música".
        </p>
        <br />
        <p>
          Selecciona Spootchat en la lista de servicios de música compatibles.
          Cuando se te solicite, introduce tu ID de cuenta junto con tu
          contraseña y pulsa "Actualizar".
        </p>
        <br />
        <p>
          Cierra el menú "Configurar reproductor" y selecciona el icono del menú
          Inicio. Abre el panel de navegación y busca Spootchat en la lista de
          fuentes de música. Selecciona Spootchat, comienza a navegar en tu
          cuenta basada en la nube y agrega música a tus listas de reproducción
          de Bluesound.
        </p>
        <br />
        <p>
          Para controlar de forma remota Spootchat desde Bluesound, descarga la
          última versión para iOS/Android en la App Store o en Google Play Store
          y busca Bluesound. Con la aplicación Bluesound puedes encontrar nuevos
          lanzamientos de álbumes, buscar a tu artista favorito o escuchar la
          canción más popular en ese momento.
        </p>
        <br />
        <p>
          No hay ningún icono visual ni ninguna configuración para controlar la
          música que reproduces. Siempre que tengas una subscripción válida a
          Spootchat, la transmisión será HiFi automáticamente, FLAC sin
          pérdidas.
        </p>
        <br />
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
