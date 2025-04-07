import React from 'react'
import { useTranslation } from 'react-i18next';

const Location = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className='container max-w-[1260px] mx-auto px-4 mt-20'>
        <div className='mt-20'>
          <h1 className='text-black md:font-extrabold font-bold md:text-5xl text-3xl text-center'>{t("location.title")}</h1>
          <p className='text-black font-normal text-lg mt-5 text-center'>{t("location.desc")}</p>
        </div>
      </div>
      <div className='mt-10 w-full'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.6556552366706!2d69.2856905!3d41.33810059999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5f1f5cfd49%3A0x110bc2a5ed9856b7!2sLIMSA!5e0!3m2!1sru!2s!4v1743747567120!5m2!1sru!2s"
          className='w-full'
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy">
        </iframe>
      </div>
    </>
  )
}

export default Location;
