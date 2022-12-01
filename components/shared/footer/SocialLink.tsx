import Image from 'next/image'
import Link from 'next/link'


const SocialLink = ({ img }: any) => {
    return (
        <li className="font-primary cursor-pointer text-secondary laptop-x:w-6">
            <Link href="/">
                <a>
                    <Image
                        src={`/images/${img}`}
                        alt="superfandom logo"
                        className="brand-image w-[24px]"
                        width="32px"
                        height="32px"
                    />
                </a>
            </Link>
        </li>
    )
}

export default SocialLink