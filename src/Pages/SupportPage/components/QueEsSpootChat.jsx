import { Link } from "react-router-dom";
import BaseLayout from "../../../Components/BaseLayout";

export default function QueEsSpootChat(){
    
    return (
        <BaseLayout>
         <div className="bg-[#e5e7eb] py-24 px-52">
        <h1 className="text-gray mt-16 font-bold text-center text-2xl mb-6">
        ¿Qué es Spootchat?
        </h1>
        <p>
        Spootchat se fundó por artistas y para artistas, como una plataforma de streaming innovadora para devolver valor a la industria musical. Empoderamos a los artistas con los productos, recursos, servicios y contenido necesarios para tomar el control de sus carreras y conectarse más profundamente con los fans. Spootchat está disponible en más de 60 países, donde ayuda a los artistas a derribar las barreras económicas para que puedan crear el siguiente gran éxito cultural. Spootchat forma parte de Block, Inc. (NYSE: SQ), una empresa tecnológica global centrada en los servicios financieros.
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
    )
    
}

