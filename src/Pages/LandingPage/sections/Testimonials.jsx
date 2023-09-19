"use client";

export default function Testimonials() {
  return (
    <swiper-container space-between="30" effect="fade" centered-slides="true"className="w-screen" autoplay-delay="4000" autoplay-disable-on-interaction="false">
        <swiper-slide><div className="flex flex-col h-96 italic p-20 text-2xl items-center text-center justify-center leading-loose bg-gradient-to-b from-black via-green-700 to-black  dark:text-white">
          "SpootChat es un excelente servicio de streaming de música, ideal para
          cualquier persona con afición por el audio de alta fidelidad."
          <p className="font-bold mt-10 not-italic">Carlos García</p>
        </div>
        </swiper-slide>
        <swiper-slide><div className="flex flex-col h-96 italic p-20 text-2xl  text-center items-center justify-center leading-loose bg-gradient-to-b from-black via-green-700 to-black  dark:text-white">
          "SpootChat ha transformado mi experiencia musical. Con su interfaz
          intuitiva y la posibilidad de charlar en tiempo real con otros amantes
          de la música, nunca he tenido una forma más emocionante de descubrir y
          compartir canciones. ¡Definitivamente una aplicación imprescindible
          para cualquier melómano!."
          <p className="font-bold mt-10 not-italic">Ana Sofía</p>
        </div>
        </swiper-slide>
        <swiper-slide><div className="flex flex-col h-96 italic p-20 text-2xl text-center  items-center justify-center leading-loose bg-gradient-to-b from-black via-green-700 to-black dark:text-white">
          "SpootChat es la mejor aplicación de música que he usado. Me encanta
          cómo puedo descubrir nueva música y conectarme con otros amantes de la
          música en tiempo real. ¡Es una experiencia musical increíble!"
          <p className="font-bold mt-10 not-italic">Fernando Garzón </p>
        </div>
        </swiper-slide>
    </swiper-container>
  );
}
