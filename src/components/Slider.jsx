import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./Swiper.css";
import { SwiperSlideItem } from "../Items/SwiperSlideItem";
const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {SwiperSlideItem.map((currElem) => {
          return (
            <>
              <SwiperSlide key={currElem.id}>
                <picture>
                  <img src={currElem.img} alt={currElem.alt} />
                </picture>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
