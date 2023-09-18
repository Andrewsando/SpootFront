import { Link } from "react-router-dom";

export function ThirdSection() {
  return (
    <div className="bg-[#efefef]" id="planes">
      <p className="tracking-tight font-extrabold text-center text-3xl pt-14">
        Elige tu plan
      </p>
      <p className="text-black tracking-tight text-center text-sm mt-2">
        Escucha sin límites en tu teléfono, tus altavoces y otros dispositivos.
      </p>
      <div className="flex justify-center gap-32 mt-10 pb-20">
        <div className=" w-64 p-4  shadow-lg rounded-2xl dark: bg-[#1fd660]">
          <div className="flex items-center justify-between text-white">
            <p className="mb-4 text-4xl font-medium">Normal</p>
            <p className="flex flex-col text-3xl font-bold">
              $99
              <span className="text-sm font-thin text-right">Por mes</span>
            </p>
          </div>
          <p className="mt-4 text-white text-md">Plan incluye :</p>

          <ul className="w-full mt-6 mb-6 text-sm text-white">
            <li className="mb-3 flex items-center ">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="white"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              Alta calidad de sonido
            </li>
            <li className="mb-3 flex items-center ">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="white"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              Sin anuncios
            </li>
            <li className="mb-3 flex items-center ">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="white"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              Escucha sin conexión
            </li>
            <li className="mb-3 flex items-center ">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="white"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              Live en Spootchat
            </li>
            <li className="mb-3 flex text-center items-center opacity-50">
              30 días gratis y después $99 el mes
            </li>
          </ul>
          <Link to="/suscribe"
            type="button"
            className="w-full px-3 py-3 self-end text-sm text-black mt-16 bg-white rounded-lg shadow hover:bg-gray-100 font-bold text-center "
          >
            Adquiérelo
          </Link>
        </div>
        {/* Plan 2 */}
        <div className="w-64 p-4  shadow-lg rounded-2xl dark: bg-[#00b44b]">
          <div className="flex items-center justify-between text-white">
            <p className="mb-4 text-4xl font-medium">Plus</p>
            <p className="flex flex-col text-3xl font-bold">
              $100
              <span className="text-sm font-thin text-right">Por mes</span>
            </p>
          </div>
          <p className="mt-4 text-white text-md">Plan incluye :</p>
          <ul className="w-full mt-6 mb-6 text-sm text-white">
            <li className="mb-3 flex items-center ">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="white"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              Alta calidad de sonido
            </li>
            <li className="mb-3 flex items-center ">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="white"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              Sin anuncios
            </li>
            <li className="mb-3 flex items-center ">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="white"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              Escucha sin conexión
            </li>
            <li className="mb-3 flex items-center ">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="white"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              Live en Spootchat
            </li>
            <li className="mb-3 flex items-center ">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="white"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              Saltos ilimitados
            </li>
            <li className="mb-3 flex text-center items-center opacity-50">
              30 días gratis y después $100 el mes
            </li>
          </ul>
          <Link to="/suscribe"
            type="button"
            className="w-full px-3 py-3 text-sm text-black mt-8 bg-white rounded-lg shadow hover:bg-gray-100 font-bold text-center"
          >
            Adquiérelo
          </Link>
        </div>
        {/* Plan 3 */}
        <div className="w-64 p-4 shadow-lg rounded-2xl dark: bg-green-600 ">
          <div className="flex items-center justify-between text-white">
            <p className="mb-4 text-4xl font-medium">Pro</p>
            <p className="flex flex-col text-3xl font-bold">
              $110
              <span className="text-sm font-thin text-right">Por mes</span>
            </p>
          </div>
          <p className="mt-4 text-white text-md">Plan incluye :</p>
          <ul className="w-full mt-6 mb-6 text-sm text-white">
            <li className="mb-3 flex items-center ">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="white"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              Max calidad de sonido
            </li>
            <li className="mb-3 flex items-center ">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="white"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              Sin anuncios
            </li>
            <li className="mb-3 flex items-center ">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="white"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              Escucha sin conexión
            </li>
            <li className="mb-3 flex items-center ">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="white"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              Live en Spootchat
            </li>
            <li className="mb-3 flex items-center ">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="white"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              Saltos ilimitados
            </li>
            <li className="mb-3 flex items-center ">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="white"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              Chat con tus artistas
            </li>
            <li className="mb-3 flex text-center items-center opacity-50">
              30 días gratis y después $99 el mes
            </li>
          </ul>
          <Link to="/suscribe"
            type="button"
            className="w-full text-center px-3 py-3 text-sm text-black  bg-white rounded-lg shadow hover:bg-gray-100 font-bold "
          >
            Adquiérelo
          </Link>
        </div>
      </div>
    </div>
  );
}
