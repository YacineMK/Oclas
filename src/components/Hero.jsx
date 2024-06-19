import React, { Suspense, useRef } from 'react';
import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Model from './models/VrModel';
import Loading from './Layout/Loading'; 
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Hero() {
    const textref = useRef(null);
    const pref = useRef(null);

    useGSAP(() => {
        const textAnimation = () => {
            gsap.from(textref.current, { 
                opacity: 0,
                y: 6,
                duration: 2,
                ease: 'power3.out',
            });
            gsap.from(pref.current, {
                opacity: 0,
                y: 6,
                duration: 2,
                ease: 'power3.out',
            });
        };
        textAnimation();
    }, []);
    return (
        <div className='hea overflow-x-hidden flex flex-col text-center justify-center items-center'>
            <h1 ref={textref} className='text-[48px] mt-[20px] md:text-[80px] z-20 md:mt-[50px]'>Oclas solutions</h1>
            <p ref={pref}>for digital solutions</p> {/* Corrected the typo in "digital" */}
            <div className='w-[100vw] mt-[40px] h-[500px]'>
                <Canvas >
                    <Suspense fallback={<Loading />}> 
                        <Model />
                    </Suspense>
                    <Environment preset='sunset' />
                </Canvas>
            </div>
        </div>
    );
}

export default Hero;