import { Link } from "react-router-dom";
import BaseLayout from "../../../Components/BaseLayout";

export default function NuevosProductos() {
  return (
    <BaseLayout>
      <div className="bg-[#e5e7eb] py-24 px-52">
        <h1 className="text-gray mt-16 font-bold text-center text-2xl mb-6">
          Función Live
        </h1>
        <h2 className="text-gray font-bold my-8">Función Live</h2>
        <p>
          La función Live facilita descubrir y disfrutar de la música con otras
          personas en tiempo real. Selecciona temas de nuestro catálogo de más
          de 100 M de canciones, comparte el enlace de tu sesión y transmite en
          directo. Live está disponible para los abonados HiFi e HiFi Plus en
          dispositivos móviles iOS o Android.
        </p>
        <h2 className="text-gray font-bold my-8">Empezar</h2>
        <p>
          Si todavía no te has creado un perfil, tendrás que hacerlo antes de
          transmitir en directo. Obtén más información sobre cómo configurar tu
          perfil aquí.
        </p>
        <h2 className="text-gray font-bold my-8">
          Durante tu sesión en directo
        </h2>
        <ul className="list-disc">
          <li>
            Revisa, edita o añade a tu cola haciendo clic en el icono de lista
            de la esquina inferior izquierda. Hay un límite de duración de 3
            horas.
          </li>
          <li>
            Tu sesión finalizará si sales, o se pausará si recibes una
            notificación.
          </li>
          <li>
            Podrás ver el número de oyentes durante la sesión junto al icono de
            los auriculares.
          </li>
          <li>
            Actualmente, los temas se reproducirán en la calidad AAC normal de
            96 kps. Si seleccionas temas en Dolby Atmos o en el formato Sony 360
            Reality, los oyentes no podrán escuchar la canción que se está
            reproduciendo.
          </li>
          <li>
            Pulsa el botón X cuando estés preparado para finalizar la sesión en
            directo.
          </li>
        </ul>
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
