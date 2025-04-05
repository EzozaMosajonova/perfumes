import React from 'react'
import videoFile from "../../../public/video.MP4";

const Process = () => {
  return (
    <div className='bg-amber-50 py-12 mt-8'>
      <div className='container max-w-[1260px] mx-auto px-4 '>
      <div className='mt-10'>
        <h1 className='text-black md:font-extrabold font-bold md:text-5xl text-3xl text-center'>Our Process</h1>
        <p className='text-black font-normal text-lg mt-5 text-center'>At Luxury Line Perfumes, our fragrances are created through a meticulous process that ensures every bottle is a masterpiece. Here's a glimpse into our process:</p>
      </div>
      <div className='flex  justify-between flex-wrap mt-5'>
        <div className='border-black border-2 p-3 text-center md:w-[32%] w-full mt-4 rounded-lg'>
          <strong className='text-black font-bold text-lg'>Ingredient Sourcing</strong>
          <p className='text-black font-normal mt-3'>We source the finest ingredients from around the world, including rare flowers, exotic spices, and precious woods.</p>
        </div>
        <div className='border-black border-2 p-3 text-center md:w-[32%] w-full mt-4 rounded-lg'>
          <strong className='text-black font-bold text-lg'>Expert Blending</strong>
          <p className='text-black font-normal mt-3'>Our team of expert perfumers carefully blends each ingredient to create harmonious and unique scents.</p>
        </div>
        <div className='border-black border-2 p-3 text-center md:w-[32%] w-full mt-4 rounded-lg'>
          <strong className='text-black font-bold text-lg'>Quality Control</strong>
          <p className='text-black font-normal mt-3'>Every batch undergoes rigorous quality control checks to ensure consistency and excellence.</p>
        </div>
        <div className='flex  justify-around flex-wrap mt-5'>
          <div className='border-black border-2 p-3 text-center md:w-[32%] w-full mt-4 rounded-lg'>
            <strong className='text-black font-bold text-lg'>Handcrafting</strong>
            <p className='text-black font-normal mt-3'>Each bottle is hand-filled and meticulously packaged to preserve the integrity of the fragrance.</p>
          </div>
          <div className='border-black border-2 p-3 text-center md:w-[32%] w-full mt-4 rounded-lg'>
            <strong className='text-black font-bold text-lg'>Sustainable Practices</strong>
            <p className='text-black font-normal mt-3'>We are committed to sustainable practices, ensuring our processes are environmentally friendly and ethically responsible.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Process