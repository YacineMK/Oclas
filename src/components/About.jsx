import React from 'react'
import left from '../assets/left.png';
import right from '../assets/right.png';



function About() {
    return (
        <div className='mt-[75vh] flex h-[100vh] justify-center  flex-col items-center md:mt[50px] '>
            <h1 className='text-[96px] flex text-center font-bold'>oclus solutions</h1>
            <p className='text-[32px] w-[60%] flex text-center   font-bold' >Conditional statements are used to perform different actions based on different conditions. actions based on different conditions</p>
            <div className='flex mt-[50px] w-full justify-around'>
                <img src={left} width={300} />
                <img src={right} width={300} />
            </div>
        </div>
    )
}

export default About