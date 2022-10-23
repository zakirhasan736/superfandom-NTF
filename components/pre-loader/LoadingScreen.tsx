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
        <section className="bg-black h-screen w-full text-white">
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center relative">
                    <Image
                        src="/images/Union.png"
                        alt="preloader"
                        width="100px"
                        height="140px"
                    />
                    <span className="absloute"><CountUp end={100} duration={time} />%</span>
                </div>
            </div>
        </section>
    )
}

export default LoadingScreen