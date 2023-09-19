import { Link } from "react-router-dom";
import BaseLayout from "../../../Components/BaseLayout";

export default function ApoyoArtistas(){
    return (
        <BaseLayout>
        <div className="bg-[#e5e7eb] py-24 px-52">
            <h1 className="text-gray mt-16 font-bold text-center text-2xl mb-6">Cómo gestionar tu equipo de Spootchat Artist Home</h1>
           <h2 className="text-gray font-bold my-8">Tipos de funciones</h2> 
           <p>Las funciones determinan las acciones que los diferentes miembros del equipo pueden realizar en TIDAL Artist Home. Dependiendo de tu función, puedes ver los campos en el perfil del artista, realizar actualizaciones y modificar el acceso de los miembros del equipo. Puedes formar parte de varios equipos de artistas.</p>
           <h2 className="text-gray font-bold my-8">Propietario</h2>
           <p>Los miembros propietarios del equipo pueden ver y editar todos los campos disponibles en el perfil del artista, actualizar la información de la cuenta y gestionar los permisos del equipo. Solo puede haber un propietario a la vez, y esta función no se puede editar ni eliminar por otro miembro del equipo. Esta es la función por defecto cuando se ha creado correctamente una cuenta.</p>
           <h2 className="text-gray font-bold my-8">Administrador</h2>
           <p>Los miembros administradores del equipo pueden ver y editar todos los campos del perfil del artista y cambiar la información de la cuenta. Los administradores pueden invitar a nuevos miembros o eliminar el acceso, a excepción del propietario. Esta función solo se puede eliminar por el propietario o por otro miembro administrador del equipo.</p>
           <h2 className="text-gray font-bold my-8">Discográfica</h2>
           <p>Los miembros del equipo de la discográfica pueden ver y editar todos los campos del perfil del artista y realizar cambios en la información de la cuenta del artista. También pueden invitar a nuevos miembros, o eliminar el acceso, de las funciones de Discográfica o Solo vista. El propietario, los administradores, el gestor o la discográfica pueden eliminar esta función. Ten en cuenta que si eres una discográfica y quieres ver varios artistas en tu lista, esta es la mejor función que puedes añadir, ya que cuando inicies sesión con el mismo correo electrónico con el que se te invitó a la función de discográfica, podrás ver a todos los artistas de tu lista que te hayan invitado.</p>
           <h1 className="text-gray mt-16 font-bold text-center text-2xl mb-6">
          ¿No puedes encontrar lo que estás buscando?
        </h1>
        <div className="text-center">
        <Link to="/contact-us" className="home-button mt-11">
        <button
          type="button"
          className="font-bold"
        >
          Contáctanos
        </button>
       </Link> 
       </div>

        </div>
    </BaseLayout>
    )
    
}