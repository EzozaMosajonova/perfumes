import React from "react";
import sueno from "../../assets/sueno.png";
import luxury from "../../assets/luxury.png";
import artist from "../../assets/artist.png";
import zog from "../../assets/zog.png";
import omaff from "../../assets/omaff.png";
import { useTranslation } from "react-i18next";

const brands = [
  { name: "Sueño", img: sueno },
  { name: "Luxury Perfumes", img: luxury },
  { name: "Artist Parfum", img: artist },
  { name: "Zoghbi Parfums", img: zog },
  { name: "OMAF", img: omaff },
];

const Brands = () => {
  const { t } = useTranslation();
  return (
    <div id="brands" className="container max-w-[1260px] mx-auto px-4 mt-20">
      <div className='mt-20'>
        <h1 className='text-black md:font-extrabold font-bold md:text-5xl text-3xl text-center'>{t("brand.title")}</h1>
        <p className='text-black font-normal text-lg mt-5 text-center'>{t("brand.desc")}</p>
      </div>
      <div className="flex justify-between flex-wrap items-center  w-full">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="mt-5 flex items-center justify-center md:w-[25%] w-full h-[160px]  border border-blue-300  bg-white"
          >
            <img src={brand.img} alt={brand.name} className=" h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
