import React from 'react'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Model from './Model';

function Hero() {
    return (
        <div className='hea flex flex-col text-center justify-center items-center'>
            <h1 className='text-[48px] mt-[20px] md:text-[80px] z-20 md:mt-[50px]'>Oclus solutions</h1>
            <p>for degital solutions</p>
            <div className='w-[100vh] mt-[40px] h-[500px]'>
                <Canvas >
                    <Model />
                    <Environment preset='sunset' />
                </Canvas>
            </div>
        </div>
    )
}

export default Hero