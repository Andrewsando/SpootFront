import BaseLayout from "../../Components/BaseLayout";

export default function WhatSpootChat() {
  return (
    <BaseLayout>
      <div className="text-white font-lg p-28 bg-[url('../../../public/images/img2.jpg')] bg-cover">
        <div className="grid grid-cols-2 place-content-center">
          <div className="flex flex-col justify-center my-8">
            <h1 className="font-extrabold text-left text-5xl text-[#54E360] my-8">
              Acerca de SpooChat
            </h1>
            <p className="text-left text-lg mb-4">
              La plataforma SpootChat revolucionará la escucha de música para
              siempre. Nuestro paso al podcasting trajo
              innovación y una nueva generación de oyentes del medio, 
              estamos preparados para
              crecer con la incorporación de audiolibros.
            </p>
            <p className=" text-left text-lg">
              Hoy en día, más oyentes que nunca pueden descubrir, gestionar y
              disfrutar más 100 millones de pistas, 5 millones de títulos de
              podcasts y 350.000 audiolibros en Spootchat. Somos el servicio de
              streaming de audio más popular del mundo. 
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 place-content-center">
          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-left text-4xl mt-14 mb-14 text-[#54E360]">
             Nuestra misión
            </h1>
            <p className="text-left text-lg">
              <span className="font-bold">Nuestra misión</span> es desbloquear
              el potencial de la creatividad humana, dando a un millón de
              artistas creativos la oportunidad de vivir de su arte y miles de
              millones de fans la oportunidad para disfrutarlo e inspirarse en
              él.
            </p>
          </div>
        </div>

        <div className="flex flex-row mt-7 mb-7">
          <div className="basis-1/3 p-7">
            <h1 className="font-bold text-2xl mt-7 mb-7 text-[#54E360]">
              Sostenibilidad
            </h1>
            <p className="text-lg">
              Reducir las emisiones no es algo que hagamos de forma paralela. Se
              trata de un parte integral del negocio cotidiano.
            </p>
          </div>
          <div className="basis-1/3 p-7">
            <h1 className="font-bold text-2xl mt-7 mb-7 text-[#54E360]">
              Es hora de jugar limpio
            </h1>
            <p className="text-lg">
              Cuando la competencia es justa, tanto los consumidores como las
              empresas ganan. Aprender sobre nuestros esfuerzos para igualar el
              campo de juego para todos los desarrolladores.
            </p>
          </div>
          <div className="basis-1/3 p-7">
            <h1 className="font-bold text-2xl mt-7 mb-7 text-[#54E360]">
              SpootChat alto y claro
            </h1>
            <p className="text-lg">
              Los artistas merecen claridad sobre la economía de la transmisión
              de música. Este sitio arroja luz sobre la economía global del
              streaming y la realeza sistema.
            </p>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
