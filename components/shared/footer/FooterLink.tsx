import Link from "next/link"


const FooterLink = ({ name, href, title, pageName }: any) => {
    return (
        <li className={`${pageName === title ? "text-neon" : ""} footer-list-links`}>
            <Link href={href}>
                <a>{name}</a>
            </Link>
        </li>
    )
}

export default FooterLink