import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";
interface animeCalenderSwiperProps {
  children: React.ReactNode;
}

export default function AnimeCalenderSwiper({
  children,
}: animeCalenderSwiperProps) {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={1.2}
      centeredSlides={true}
      spaceBetween={40}
      navigation={{
        nextEl: ".swiper-button-next-calender",
        prevEl: ".swiper-button-prev-calender",
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          centeredSlides: true,
          spaceBetween: 20,
        },

        1024: {
          slidesPerView: 3,
          centeredSlides: false,
          spaceBetween: 30,
        },

        1280: {
          slidesPerView: 4,
          centeredSlides: false,
          spaceBetween: 20,
        },
      }}
    >
      {children}
    </Swiper>
  );
}
