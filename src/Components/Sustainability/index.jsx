import React from 'react'
import videoFile from "../../../public/video.MP4";

const Sustainability = () => {
  return (
    <div className='container max-w-[1260px] mx-auto px-4'>
      <div className='mt-20'>
        <h1 className='text-black md:font-extrabold font-bold md:text-5xl text-3xl text-center'>Sustainability</h1>
        <p className='text-black font-normal text-lg mt-5'>At our company, sustainability is at the core of our mission and values. We are dedicated to adopting and promoting eco-friendly practices across all aspects of our business. Here’s how we make a difference:</p>
      </div>
      <div className='flex  justify-between flex-wrap mt-5'>
        <div className='border-black border-2 p-3 text-center md:w-[32%] w-full mt-4 rounded-lg'>
          <strong className='text-black font-bold text-lg'>Eco-friendly Production</strong>
          <p className='text-black font-normal mt-3'>We utilize sustainable materials and processes in our production to reduce our carbon footprint. Our facilities are designed to minimize waste and optimize energy efficiency.</p>
        </div>
        <div className='border-black border-2 p-3 text-center md:w-[32%] w-full mt-4 rounded-lg'>
          <strong className='text-black font-bold text-lg'>Community Engagement</strong>
          <p className='text-black font-normal mt-3'>We engage with local communities to support environmental conservation projects and promote awareness about sustainable living .</p>
        </div>
        <div className='border-black border-2 p-3 text-center md:w-[32%] w-full mt-4 rounded-lg'>
          <strong className='text-black font-bold text-lg'>Innovation & Efficiency</strong>
          <p className='text-black font-normal mt-3'>We are committed to driving innovation that leads to greater sustainability. By enhancing our processes and technologies, we aim to reduce environmental impact while improving product quality and efficiency.</p>
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