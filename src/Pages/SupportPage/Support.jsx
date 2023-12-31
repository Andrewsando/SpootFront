import BaseLayout from "../../Components/BaseLayout";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import { cardData } from "./utils/cardData";

export default function Support() {
  return (
    <BaseLayout>
      <div className="bg-gray-200 text-center">
        <SearchBar />
        <h1 className="text-gray mt-16 font-bold text-center text-2xl mb-6">
          Spootchat Support
        </h1>
        <div className="flex justify-evenly overflow-hidden flex-wrap flex-row gap-10 sm:gap-24 md:gap-4 bg-gray-200 mt-12 px-6 md:px-20 ">
          {cardData.map((info) => (
            <Card
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
        <button
          type="button"
          className="mb-12 mx-auto focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Contáctanos
        </button>
      </div>
    </BaseLayout>
  );
}
