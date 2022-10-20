import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { NextPage } from 'next';
const LoadingScreen: NextPage<any> = ({ loaded }) => {
    const [per, setPer] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setPer(pre=>pre+1)
        }, 500)
        if (loaded) {
            setPer(100)
        }
        if (per > 100) {
            clearInterval(timer)
        }
    }, [loaded, per])

    return (
        <section className="bg-black h-screen w-full text-white">
            <div className="flex items-center justify-center">
                <div className="">
                    <Image
                        src="/images/Union.png"
                        alt="preloader"
                        width="382px"
                        height="520px"
                    />
                    <span>{per}%</span>
                </div>
            </div>
        </section>
    )
}

export default LoadingScreen