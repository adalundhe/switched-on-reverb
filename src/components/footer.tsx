import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { ContentMode } from "./header";


export const Footer = ({ footerMode = ContentMode.dark }: {footerMode?: ContentMode}) => {


    const currentYear = new Date().getFullYear();

    const footerStyle = footerMode === ContentMode.dark ? "bg-black text-white" : "bg-white text-black border-t border-black-thin";

    return (
        <footer className={`py-2 h-1/4 text-center ${footerStyle}`}>
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