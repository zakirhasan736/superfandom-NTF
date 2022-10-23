import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup';

import { NextPage } from 'next';
const LoadingScreen: NextPage<any> = () => {
    const [time, setTime] = useState<any>(0);
    useEffect(() => {
        window.onload = function () {
            var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
            const t= loadTime / 60;
            const time:unknown = ((parseFloat(t as unknown as string)).toFixed(2))
            setTime(time);
        }
    }, [])

    return (
        <section className="bg-black h-screen w-full text-white fixed left-0 right-0 top-0 bottom-0">
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center fixed w-full h-full left-0 bottom-0 right-0 top-0">
                   <div className="loader-item-box relative">
                   <div className="loader-mode-img w-[155px] h-270px]">
                   <Image
                        src="/images/Union.png"
                        alt="preloader"
                        width="155px"
                        height="270px"
                    /> 
                   </div>
                    <span className="absolute top-[70%] left-0 bottom-0 right-0 text-center"><CountUp end={100}   duration={time}/>%</span>
                   </div>
                </div>
            </div>
        </section>
    )
}

export default LoadingScreen