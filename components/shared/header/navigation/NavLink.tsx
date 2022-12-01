import Link from 'next/link'
import React from 'react'

const NavLink = ({ name, title,pageName, href }: any) => {

    return (
        <li className={`${ pageName === title ? 'text-neon' : ''} nav-items-link`}>
            <Link href={href}>
                <a>{name}</a>
            </Link>
        </li>
    )
}

export default NavLink