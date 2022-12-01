import Link from 'next/link'
import React from 'react'

const ServiceLink = ({ name }: any) => {
    return (
        <li className="footer-term-service-link">
            <Link href="/">
                <a>{name}</a>
            </Link>
        </li>
    )
}

export default ServiceLink