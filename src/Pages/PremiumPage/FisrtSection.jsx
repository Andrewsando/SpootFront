import { Link } from "react-router-dom";

export default function FirstSection() {
  return (
    <div className="flex flex-row bg-[#1fd660]">
      <div className=" p-14">
        <p className="mt-32 text-left text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Suscríbete a uno de nuestros planes
        </p>
        <p className="mt-9 text-left text-xl tracking-tight font-bold text-gray-900 dark:text-white">
          Disfrúta de musica en modo offline y sin anuncios más muchos otros
          beneficios dependiendo del plan que elijas
        </p>
        
        <Link to="/access-to"
          type="button"
          className="text-white border-solid border-2 bg-black hover:bg-[#00c744] hover:border-[#00c744] focus:outline-none focus:ring-4 border-black focus:ring-black rounded-full text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blackdark:hover:bg-gray-700 dark:bg-black  font-bold tracking-tight mt-8"
        >
          Ya tengo una cuenta
        </Link>
        <a
          type="button"
          className="text-white border-solid	border-2 focus:outline-none focus:ring-4 border-white focus:ring-gray-300 rounded-full text-base px-5 py-2.5 mr-2 mb-2 dark:bg-[#1fd660] dark:hover:bg-[#00c744] dark:focus:ring-gray-700 font-bold tracking-tight mt-8 b-gray-800 "
          href="#planes"

        >
          Ver planes
        </a>
        <br />
        <div className="mt-10">
          <Link
            to="/privacy-policy-and-terms-of-use"
            className=" text-left text-sm tracking-tight text-gray-900 dark:text-white underline"
          >
            Se aplican términos y condiciones
          </Link>
        </div>
      </div>
        <img className="h-80 mt-40 mr-36 p-4" src="/public/images/premium.png" alt="premium"></img>
    </div>
  );
}
