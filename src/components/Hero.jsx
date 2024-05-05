import React from 'react'
import Heroimage from '../assets/heroimg.png'

function Hero() {
    return (
        <div className='flex justify-center  flex-col items-center md:mt[50px] '>
            <h1 className='text-[90px] z-20 font-bold'>oclus solutions</h1>
            <img src={Heroimage} className='z-10 absolute bottom-0 w-[40%]' />
        </div>
    )
}

export default Hero