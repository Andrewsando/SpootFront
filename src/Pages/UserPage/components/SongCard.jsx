import { BsFillPlayCircleFill } from 'react-icons/bs';

export default function SongCard({ img, name, info, artist }) {
  return (
    <div>
      <div className="relative flex w-46 flex-col rounded-xl bg-neutral-900 bg-clip-border  shadow-md hover:bg-neutral-900 dark:bg-stone-900 dark:border-neutral-800 dark:hover:bg-neutral-800">
        <div className="relative mx-4 mt-4 h-600 overflow-auto rounded-xl bg-neutral bg-clip-border text-neutral-800 shadow-lg">
          <img className="w-40 h-40 rounded-lg" src={img} alt="profile-picture" />
        </div>
        <div>
          {/* <BsFillPlayCircleFill color='#54E35F' fontSize="3rem" position="relative"  className='browse-in'/>  */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12" bg-success>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
          </svg>
        </div>
        <div className="p-6 text-center">
          <h4 className="mb-2 block font-sans text-base font-semibold leading-snug tracking-normal text-white antialiased">
            {name}
          </h4>
          <p className="block bg-gradient-to-tr text-neutral-600 bg-clip-text font-sans text-sm font-medium leading-relaxed  antialiased">
            {artist}
          </p>
          <p className="block bg-gradient-to-tr text-neutral-600  bg-clip-text font-sans text-sm font-medium leading-relaxed  antialiased">
            {info}
          </p>
        </div>
      </div>
    </div>
  );
}
