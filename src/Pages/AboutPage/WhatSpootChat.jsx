import BaseLayout from "../../Components/BaseLayout";


export default function WhatSpootChat() {
  return (
    <BaseLayout>
      <div className="text-white font-lg p-28 bg-[url('../../../public/images/img2.jpg')] bg-cover">
        <div className="grid grid-cols-2 place-content-center">
          <div className="flex flex-col justify-center my-8">
            <h1 className="font-extrabold text-left text-5xl text-[#54E360] my-8">
              About SpootChat
            </h1>
            <p className="text-left text-lg mb-4">
              SpootChat's platform revolutionized music listening forever when we
              launched in 2008. Our move into podcasting brought innovation and a
              new generation of listeners to the medium, and in 2022 we entered the
              next audio market primed for growth with the addition of audiobooks.
            </p>
            <p className=" text-left text-lg">
              Today, more listeners than ever can discover, manage and enjoy over
              100 million tracks, 5 million podcast titles, and 350,000 audiobooks
              on Spotify. We are the world's most popular audio streaming
              subscription service with more than 551 million users, including 220
              million subscribers in more than 180 markets.
            </p>
          </div>
          {/*           <div className="flex flex-col justify-center items-center mx-4">
            <img
              class="rounded-3xl object-cover my-8"
              src={imgTeam00}
              alt="SpootChat image"
            />
          </div> */}
        </div>

        <div className="grid grid-cols-2 place-content-center">

          {/*           <div className="flex flex-col justify-center items-center p-7">
              <img
              class="rounded-3xl object-cover"
              src={imgTeam00}
              alt="SpootChat image"
            /> 
          </div> */}


          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-left text-4xl mt-14 mb-14 text-[#54E360]">
              Our mission
            </h1>
            <p className="text-left text-lg">
              <span className="font-bold">Our mission</span> is to unlock the
              potential of human creativity—by giving a million creative artists the
              opportunity to live off their art and billions of fans the opportunity
              to enjoy and be inspired by it.
            </p>
          </div>

        </div>


        <div className="flex flex-row mt-7 mb-7">
          <div className="basis-1/3 p-7">
            <h1 className="font-bold text-2xl mt-7 mb-7 text-[#54E360]">
              Sustainability
            </h1>
            <p className="text-lg">
              Lowering emissions isn't something we do on the side. It's an
              integrated part of everyday business.
            </p>
          </div>
          <div className="basis-1/3 p-7">
            <h1 className="font-bold text-2xl mt-7 mb-7 text-[#54E360]">
              Time to Play Fair
            </h1>
            <p className="text-lg">
              When competition is fair, both consumers and companies win. Learn
              about our efforts to even the playing field for all developers.
            </p>
          </div>
          <div className="basis-1/3 p-7">
            <h1 className="font-bold text-2xl mt-7 mb-7 text-[#54E360]">
              SpootChat Loud & Clear
            </h1>
            <p className="text-lg">
              Artists deserve clarity about the economics of music streaming.
              This site sheds light on the global streaming economy and royalty
              system.
            </p>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
