// eslint-disable-next-line react/prop-types
import { BsFillPlayCircleFill } from "react-icons/bs";
export default function SongCard({ img, name, info, artist, onClick}) {


  return (
    <div onClick={onClick}>
      <div className="relative flex w-48 h-72 flex-col justify-between rounded-xl bg-neutral-900 bg-clip-border shadow-md group hover:bg-neutral-900 dark:bg-stone-900 dark:border-neutral-800 dark:hover:bg-neutral-800">
        <div className="relative mx-4 mt-4 h-600 overflow-auto rounded-xl bg-neutral bg-clip-border text-neutral-800 shadow-lg">
          <img
            className="w-40 h-40 rounded-lg"
            src={img}
            alt="profile-picture"
          />
          <div className="w-full h-full absolute top-0 left-0 hidden flex-col justify-center group-hover:flex">
            <BsFillPlayCircleFill
              color="#54E35F"
              fontSize="3rem"
              className="browse-in mx-auto"
            />
          </div>
        </div>
        <div className="p-4 text-center">
          <h4 className="mb-2 block font-sans text-base font-semibold leading-snug tracking-normal text-white antialiased">
            {name}
          </h4>
          <p className="block bg-gradient-to-tr text-neutral-600 bg-clip-text font-sans text-sm font-medium leading-relaxed antialiased">
            {artist}
          </p>
          <p className="block bg-gradient-to-tr text-neutral-600  bg-clip-text font-sans text-sm font-medium leading-relaxed antialiased">
            {info}
          </p>
        </div>
      </div>

    </div>
  );
}
