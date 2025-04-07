import React from 'react'
import videoFile from "../../../public/video.MP4";
import { useTranslation } from 'react-i18next';

const Process = () => {
  const { t } = useTranslation();
  return (
    <div className='bg-amber-50 py-12 mt-8'>
      <div className='container max-w-[1260px] mx-auto px-4 '>
      <div className='mt-10'>
        <h1 className='text-black md:font-extrabold font-bold md:text-5xl text-3xl text-center'>{t("process.title")}</h1>
        <p className='text-black font-normal text-lg mt-5 text-center'>{t("process.desc")}</p>
      </div>
      <div className='flex  justify-between flex-wrap mt-5'>
        <div className='border-black border-2 p-3 text-center md:w-[32%] w-full mt-4 rounded-lg'>
          <strong className='text-black font-bold text-lg'>{t("process.sectionTitle1")}</strong>
          <p className='text-black font-normal mt-3'>{t("process.sectionDesc1")}</p>
        </div>
        <div className='border-black border-2 p-3 text-center md:w-[32%] w-full mt-4 rounded-lg'>
          <strong className='text-black font-bold text-lg'>{t("process.sectionTitle2")}</strong>
          <p className='text-black font-normal mt-3'>{t("process.sectionDesc2")}</p>
        </div>
        <div className='border-black border-2 p-3 text-center md:w-[32%] w-full mt-4 rounded-lg'>
          <strong className='text-black font-bold text-lg'>{t("process.sectionTitle3")}</strong>
          <p className='text-black font-normal mt-3'>{t("process.sectionDesc3")}</p>
        </div>
        <div className='flex  justify-around flex-wrap mt-5'>
          <div className='border-black border-2 p-3 text-center md:w-[32%] w-full mt-4 rounded-lg'>
            <strong className='text-black font-bold text-lg'>{t("process.sectionTitle4")}</strong>
            <p className='text-black font-normal mt-3'>{t("process.sectionDesc4")}</p>
          </div>
          <div className='border-black border-2 p-3 text-center md:w-[32%] w-full mt-4 rounded-lg'>
            <strong className='text-black font-bold text-lg'>{t("process.sectionTitle5")}</strong>
            <p className='text-black font-normal mt-3'>{t("process.sectionDesc5")}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Process