import React from 'react'

const header = () => {
  return (
    <div>

        <div>
            <Image src={assets.profile_img} alt='' className= 'rounded-full w-32'/>
        </div>

        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm Tamoor <Image src={assets.hand_icon} alt='' className= 'w-6'/></h3>

        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            frontend web developer based in Northampton
        </h1>
        <p className='max-w-2xl mx-auto font-Ovo'>
        He knew what he was supposed to do. That had been apparent from the beginning. That was what made the choice so difficult. What he was supposed to do and what he would do were not the same. This would have been fine if he were willing to face the inevitable consequences, but he wasn't.
        </p>
        <div>
            <a href="#contact">contact me <Image src={assets.right_arrow_white} alt='' className= 'w-4'/></a>
            <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>my resume <Image src={assets.dowload_icon} alt='' className= 'w-4'/></a>

        
        </div>
    </div>
  )
}

export default header
