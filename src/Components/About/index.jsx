import React from 'react'
import IMageAbout from "../../assets/AboutImg.png"

const About = () => {
  return (
    <div id='about' className=" bg-amber-50 py-12">
      <div className="container max-w-[1260px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 text-black px-6  md:text-left">
            <h2 className="text-black  font-bold md:text-5xl text-2xl">About Luxury Line Perfumes</h2>
            <p className="text-lg mb-6 mt-5">At Luxury Line Perfumes, we believe that a fragrance is not just a scent but an experience. We offer an exquisite collection of hand-crafted perfumes, made from the finest ingredients sourced from around the world. Each bottle is a testament to our commitment to quality, elegance, and sophistication. Whether you are looking for a signature scent, a custom blend, or a gift for a loved one, our team of expert perfumers is here to guide you on a sensory journey like no other. Step into our world and discover the art of fragrance.</p>
            <a href="tel:+998901234567">
            <button className="bg-black md: text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg shadow-lg md:font-semibold font-normal  md:text-lg text-[12px] hover:scale-105 transition-transform">
              LEAREN MORE
            </button>
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={IMageAbout}
              alt='image'
              className="md:w-[450px] md:h-[450px] w-full mt-7  hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About