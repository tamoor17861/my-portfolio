import Image from 'next/image'

import { assets, infoList } from '@/assets/assets'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>
            Introduction</h4>
        <h2 className='text-center text-5xl font-Ovo'>
            About Me</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className='w-80 sm:w-100 rounded-3xl max-w-none'>
                    <Image src={assets.anime2} alt='user' className='w-full rounded-3xl'/>
                </div>
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl font-Ovo '>
                    "I am a passionate web developer with a keen eye for design and a love for clean, efficient code. I specialize in building responsive, user-friendly websites and web applications using modern technologies like JavaScript, React, and Next.js. With a strong foundation in both front-end and back-end development, I enjoy turning ideas into digital experiences that are fast, functional, and visually appealing. Always eager to learn and stay updated with the latest industry trends, I thrive on solving complex problems and bringing creative solutions to life. Let’s build something amazing together!"
                    </p>
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({icon, iconDark, title, description}, index)=>(
                            <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer'
                             key={index}>
                                <Image src={icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                <p className='text-grey-600 text-sm'>{description}</p>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
      
    </div>
  )
}

export default About
