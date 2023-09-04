import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";

register();

export default function SwiperCarousel({ cards, slidesPerView }) {
  const swiperElRef = useRef(null);

  useEffect(() => {
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });
  }, []);
  return (
    <swiper-container
      effect="coverflow"
      ref={swiperElRef}
      slides-per-view={slidesPerView}
      navigation="false"
      pagination="false"
      centeredSlides
      speed="500"
      loop="true"
    >
      {cards}
    </swiper-container>
  );
}
