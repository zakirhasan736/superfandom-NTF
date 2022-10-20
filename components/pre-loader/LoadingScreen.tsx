import Image from 'next/image'
import React from 'react'
import CountUp from 'react-countup';

import { NextPage } from 'next';
const LoadingScreen: NextPage<any> = () => {

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
                    <span className="absloute"><CountUp end={100} />%</span>
                </div>
            </div>
        </section>
    )
}

export default LoadingScreen