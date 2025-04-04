import React from 'react'
import Image from 'next/image'
import bgimg from '../../../../public/images/carousel-2.webp'
import Link from 'next/link'

const BannerSection = () => {
  return (
    <div className='relative w-full h-[350px] md:h-[500px] lg:h-[600px]'>
        <Image src={bgimg} alt='banner image' className='w-full h-full object-cover' width={1000} height={1000}/>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center'>
        <h2 className='text-[30px] md:text-[50px] lg:text-[70px] font-medium text-[#eee] text-center mb-10'>Let's start your new  dream project</h2>
        <Link href='/contact'>
        <button className='py-3  px-6 border border-[#eee] rounded-4xl hover:bg-[#eee] text-[#eee] hover:text-[#333]'>
            Contact Us
        </button>
        </Link>

        </div>
      
    </div>
  )
}

export default BannerSection
