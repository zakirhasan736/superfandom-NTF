import Image from 'next/image'
import React from 'react'
import { NextPage } from 'next';
const LoadingScreen: NextPage<any> = ({loaded}) => {
    return (
        <section className="bg-black h-screen w-full text-white">
            <div className="flex items-center justify-center">
                <div className="">
                    <Image
                        src="/public/images/Union.png"
                        alt="preloader"
                        width="382px"
                        height="520px"
                    />
                    <span>100%</span>
                </div>
            </div>
        </section>
    )
}

export default LoadingScreen