import React from 'react'
import Hero from '../assets/vr.jpg';

function Aboutus() {
    return (
        <div className="flex h-[600px] items-center mt-[120px] justify-between mx-[5%] ">
            <div className='text-left md:w-[50%]'>
                <h1 className='hea text-[32px]'> what is Oclus solutions ?</h1>
                <p className='text-[24px] mt-4'>Cette technique utilise un composant matériel (contenant des portes logiques) pour identifier la source d’interruption matériel (contenant des portes logiques) pour identifier</p>
            </div>
            <div className='w-[50%] flex justify-center'>
                <img src={Hero} className='w-[500px] h-[350px] rounded-lg' />
            </div>
        </div>
    )
}

export default Aboutus