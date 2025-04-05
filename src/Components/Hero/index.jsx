import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import Omaf from "../../assets/omaf.png";
import Pink from "../../assets/pink.png";
import Emotional from "../../assets/emotional.png";

const slides = [
  {
    title: "Discover Your Signature Scent",
    description:
      "Indulge in our exclusive collections, each telling a story of elegance and charm.",
    buttonText: "MAKE A REQUEST",
    image: Pink,
  },
  {
    title: "Exclusive Collections",
    description:
      "Experience the art of fragrance with our exclusive line of luxury perfumes, crafted to perfection.",
    buttonText: "EXPLORE NOW",
    image: Omaf,
  },
  {
    title: "Create Your Own Fragrance",
    description:
      "Our expert perfumers develop a scent that is truly one-of-a-kind, using the finest ingredients and advanced techniques.",
    buttonText: "CONTACT US",
    image: Emotional,
  },
];

const SwiperSlider = () => {
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
              <div className="flex items-center justify-between gap-8 ">
                <div className="text-black  md:text-left flex-1">
                  <h2 className="text-black  font-medium md:text-5xl text-3xl ">{slide.title}</h2>
                  <p className="text-lg mb-6 mt-5">{slide.description}</p>
                  <a href="tel:+998901234567">
                    <button className="bg-black md:w-[30%] hover:bg-amber-100 px-6 py-3 rounded-lg shadow-lg text-white md:font-semibold font-normal md:text-lg text-[12px] hover:scale-105 transition-transform">
                      {slide.buttonText}
                    </button>
                  </a>
                </div>
                <div className="flex-1 flex justify-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-[250px] h-[400px] md:w-[350px] md:h-[350px] hover:scale-105 transition-transform object-cover"
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
