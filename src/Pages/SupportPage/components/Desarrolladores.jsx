import { Link } from "react-router-dom";
import BaseLayout from "../../../Components/BaseLayout";

export default function Desarrolladores(){
    return (
        <BaseLayout>
        <div className="bg-[#e5e7eb] py-24 px-52">
            <h1 className="text-gray mt-16 font-bold text-center text-2xl mb-6">Preguntas frecuentes sobre la API abierta</h1>
           <h2 className="text-gray font-bold my-8">¿Qué es una API abierta?</h2> 
           <p>Una API abierta, también llamada API pública, es una interfaz de programación de aplicaciones que se pone a disposición pública de los desarrolladores de software, socios y todo aquel a quien pueda interesar. Las API abiertas se publican en Internet y se comparten libremente, lo que permite dar acceso universal a los consumidores. La API abierta permite el desarrollo de software basado en los datos de Spootchat. Los desarrolladores externos deben seguir los Términos y Directrices para Desarrolladores de Spootchat para cumplir con nuestros requisitos legales. En caso contrario, Spootchat podrá revocar el acceso en caso de infracción.</p>
           <h2 className="text-gray font-bold my-8">¿Qué me permite hacer una API Abierta?</h2>
           <p>Estamos trabajando para abrir tantas API como podamos, pero es un largo camino que requiere muchos esfuerzos jurídicos (negociaciones con los titulares de los derechos) y técnicos (añadir nuevos puntos finales de API). Nuestro objetivo final es permitir que los usuarios finales tengan acceso a los mismos datos que tienen los clientes oficiales de Spootchat, para que puedas construir tu propio cliente de streaming con un conjunto comparable de capacidades. Nuestro objetivo es dar rienda suelta a tu imaginación e inspiración. Pero, sin duda, hay algunas limitaciones legales que debes tener en cuenta. Puedes obtener más información en nuestra sección Directrices.</p>
           <h2 className="text-gray font-bold my-8">¿Cualquiera puede acceder a la API Abierta?</h2>
           <p>Sí. Cualquiera puede acceder a la API abierta de Spootchat. Debes registrarte e iniciar sesión en el Portal para desarrolladores, aceptar nuestras Condiciones para Desarrolladores y otros documentos legales y cumplirlos. En caso de que se produzca una infracción legal, tu acceso podría ser revocado.</p>
           <h2 className="text-gray font-bold my-8">¿Tengo que firmar las condiciones del servicio para desarrolladores?</h2>
           <p>Sí, éste es el requisito. No tendrás acceso al Panel de control ni a algunos otros componentes del Portal para desarrolladores. Podrás empezar a utilizar la API abierta sin aceptar nuestras condiciones y otros documentos legales requeridos.</p>
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