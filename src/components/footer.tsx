import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";


export const Footer = () => {


    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black py-2 text-center text-white h-1/4">
            <div className="flex justify-center py-1">
                <a href="https://www.instagram.com/switchedonaustin/">
                    <FontAwesomeIcon icon={faInstagram} className="px-1" />
                </a>
                <a href="https://www.youtube.com/channel/UCQQnnkNq-iQ3KlqgAryO-DA">
                    <FontAwesomeIcon icon={faYoutube} className="px-1"/>
                </a>
                </div>
                <div className="text-[8px]">
                <span className="pr-1">{
                    `\u00A9 ${currentYear}`
                }</span>
                <Link href={"/"}>
                    Switched On Austin
                </Link>
            </div>
        </footer>
    )
}