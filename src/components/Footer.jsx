import Logo from "/Logo.svg";
import { SiInstagram } from "react-icons/si";
import { CgFacebook } from "react-icons/cg";
import { RiTwitterXLine, RiLinkedinFill } from "react-icons/ri";


function Footer() {
    return (
        <>
            <div className="h-[2px]  mb-1 bg-gradient-to-t opacity-50 from-stone-600 to-white"></div>
            <footer className=" flex text-lg h-[100px] px-[5%] items-center justify-between">
                <a href="#">
                    <img src={Logo} alt="" width={70} height={40} />
                </a>
                <h2 className="hidden sm:flex bg-gradient-to-b from-stone-500 to-black text-transparent bg-clip-text">© 2025 Oclus solutions ∙ All Rights Reserved</h2>
                <div className="flex gap-4">
                    <a href="#">
                        <SiInstagram className="hover:scale-110" />
                    </a>
                    <a href="#">
                        <CgFacebook className="hover:scale-110" />
                    </a>
                    <a href="#">
                        <RiTwitterXLine className="hover:scale-110" />
                    </a>
                    <a href="#">
                        <RiLinkedinFill className="hover:scale-110" />
                    </a>

                </div>
            </footer>
        </>
    )
}

export default Footer;