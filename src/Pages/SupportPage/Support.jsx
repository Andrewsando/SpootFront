import { Link } from "react-router-dom";
import BaseLayout from "../../Components/BaseLayout";
import Card from "./components/Card";
import { cardData } from "./utils/cardData";

export default function Support() {
  return (
    <BaseLayout>
      <div className="bg-gray-200 text-center p-16">
        <h1 className="text-gray mt-16 font-extrabold text-center text-3xl mb-6">
         Soporte Spootchat 
        </h1>
        <div className="flex justify-evenly overflow-hidden flex-wrap flex-row gap-10 sm:gap-24 md:gap-4 bg-gray-200 mt-12 px-6 md:px-20 ">
          {cardData.map((info) => (
            <Card
              link={info.link}
              key={info.id}
              id={info.id}
              title={info.title}
              description={info.description}
            />
          ))}
        </div>
        <h1 className="text-gray mt-16 font-bold text-center text-2xl mb-6">
          ¿No puedes encontrar lo que estás buscando?
        </h1>
        <Link to="/contact-us" className="home-button">
        <button
          type="button"
          className="font-bold"
        >
          Contáctanos
        </button>
       </Link> 
      </div>
    </BaseLayout>
  );
}
