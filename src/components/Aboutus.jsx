import { useGSAP } from '@gsap/react'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Aboutus() {

    const img2 = useRef(null);
    const img1 = useRef(null);

    useGSAP(() => {
        const animateImages = () => {
            if (img2.current) {
                gsap.from(img2.current, {
                    x: 80,
                    opacity: 0,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: img2.current,
                        start: 'top 80%',
                        end: 'top 50%',
                        scrub: true,
                    },
                });
            }
            if (img1.current) {
                gsap.from(img1.current, {
                    x: -80,
                    opacity: 0,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: img1.current,
                        start: 'top 80%',
                        end: 'top 50%',
                        scrub: true,
                    },
                });
            }
        };

        animateImages();
    }, []);

    return (
        <div className="flex flex-col items-center mt-[95px] justify-between mx-[4%] md:mx-[8%] ">
            <div className='text-left mb-8 mr:-2 '>
                <h1 className='hea text-[26px] md:text-[36px] text-center'> what is Oclus solutions ?</h1>
                <p className='text-[18px] md:text-[26px] text-center mt-5'>Cette technique utilise un composant matériel (contenant des portes logiques) pour identifier la source d’interruption matériel (contenant des portes logiques) pour identifier d’interruption matériel (contenant des portes logiques) pour identifier</p>
            </div>
            <div className='flex justify-center w-[100vw] mt-[10px] h-[500px]'>
                <img src='/controller.png' ref={img1} className=' hidden md:flex' alt='controller' />
                <img src='/controller.png' ref={img2} alt='controller' className=' rotate-180 hidden md:flex' />
            </div>
        </div>
    )
}

export default Aboutus