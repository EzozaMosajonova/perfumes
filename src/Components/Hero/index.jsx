import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import Omaf from "../../assets/omaf.png";
import Pink from "../../assets/pink.png";
import Emotional from "../../assets/emotional.png";
import { useTranslation } from "react-i18next";

const SwiperSlider = () => {
  const { t } = useTranslation();

  const slides = [
    {
      title: t("hero.title1"),
      description:
        t("hero.desc1"),
      buttonText: t("hero.button1"),
      image: Pink,
    },
    {
      title: t("hero.title2"),
      description:
        t("hero.desc2"),
      buttonText: t("hero.button2"),
      image: Omaf,
    },
    {
      title: t("hero.title3"),
      description:
        t("hero.desc3"),
      buttonText: t("hero.button3"),
      image: Emotional,
    },
  ];

  return (
    <div className="bg-gradient-to-r py-12">
      <div className="container max-w-[1260px] mx-auto px-4">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row justify-between gap-8 ">
                <div className="text-black  md:text-left flex-1">
                  <h2 className="text-black  font-medium md:text-5xl text-4xl ">{slide.title}</h2>
                  <p className="text-lg mb-6 mt-5">{slide.description}</p>
                  <a href="tel:+998901234567">
                    <button className="bg-black md:w-[40%] hover:bg-amber-100 px-4 py-2 rounded-lg shadow-lg text-white md:font-semibold font-normal md:text-lg text-[12px] hover:scale-105 transition-transform">
                      {slide.buttonText}
                    </button>
                  </a>
                </div>
                <div className="flex-1 flex justify-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full md:w-[350px] md:h-[350px] hover:scale-105 transition-transform object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperSlider;
