import React from 'react'
import { useTranslation } from "react-i18next";

const Work = () => {
  const { t } = useTranslation();

  return (
    <div className='container max-w-[1260px] mx-auto px-4 mt-20'>
      <div className='mt-20'>
        <h1 className='text-black md:font-extrabold font-bold md:text-5xl text-3xl text-center'>{t("work.title")}</h1>
        <p className='text-black font-normal text-lg mt-5 text-center'>{t("work.desc")}</p>
      </div>
      <div className='mt-15'>
        <h1 className='text-black  font-extrabold md:text-3xl text-2xl text-center'>{t("work.sectionTitle1")}</h1>
        <p className='text-black font-normal text-lg mt-5 text-center'>{t("work.sectionDesc1")}.</p>
      </div>
      <div className='mt-15'>
        <h1 className='text-black  font-extrabold md:text-3xl text-2xl text-center'>{t("work.sectionTitle2")}</h1>
        <p className='text-black font-normal text-lg mt-5 text-center'>{t("work.sectionDesc2")}</p>
      </div>
      <div className='mt-15'>
        <h1 className='text-black  font-extrabold md:text-3xl text-2xl text-center'>{t("work.sectionTitle3")}</h1>
        <p className='text-black font-normal text-lg mt-5 text-center'>{t("work.sectionDesc3")}</p>
      </div>
      <div className='mt-15'>
        <h1 className='text-black  font-extrabold md:text-3xl text-2xl text-center'>{t("work.sectionTitle4")}</h1>
        <p className='text-black font-normal text-lg mt-5 text-center'>{t("work.sectionDesc4")}</p>
      </div>
    </div>
  )
}

export default Work