import React from 'react'
import videoFile from "../../../public/video.MP4";
import { useTranslation } from 'react-i18next';

const Sustainability = () => {
  const { t } = useTranslation();
  return (
    <div className='container max-w-[1260px] mx-auto px-4'>
      <div className='mt-20'>
        <h1 className='text-black md:font-extrabold font-bold md:text-5xl text-3xl text-center'>{t("sustainability.title")}</h1>
        <p className='text-black font-normal text-lg mt-5'>{t("sustainability.desc")}</p>
      </div>
      <div className='flex  justify-between flex-wrap mt-5'>
        <div className='border-black border-2 p-3 text-center md:w-[32%] w-full mt-4 rounded-lg'>
          <strong className='text-black font-bold text-lg'>{t("sustainability.sectionTitle1")}</strong>
          <p className='text-black font-normal mt-3'>{t("sustainability.sectionDesc1")}</p>
        </div>
        <div className='border-black border-2 p-3 text-center md:w-[32%] w-full mt-4 rounded-lg'>
          <strong className='text-black font-bold text-lg'>{t("sustainability.sectionTitle2")}</strong>
          <p className='text-black font-normal mt-3'>{t("sustainability.sectionDesc2")}</p>
        </div>
        <div className='border-black border-2 p-3 text-center md:w-[32%] w-full mt-4 rounded-lg'>
          <strong className='text-black font-bold text-lg'>{t("sustainability.sectionTitle3")}</strong>
          <p className='text-black font-normal mt-3'>{t("sustainability.sectionDesc3")}</p>
        </div>
      </div>
      <div className='mt-30 flex justify-center w-full'>
        <video className='w-[80%] h-[600px]' autoPlay muted loop controls>
          <source src={videoFile} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default Sustainability