import Logo from "/Logo.svg";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { Navlinks } from "../../Data/content";
import { useEffect, useState } from "react";

function Navbar() {
    const [open, setopen] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScrollTop) {
                setopen(true);
            }

            setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
        };

        window.addEventListener("scroll", handleScroll, false);

        return () => {
            window.removeEventListener("scroll", handleScroll, false);
        };
    }, [lastScrollTop]);

    return (
        <header
            className={`bg-white z-50 flex text-base h-[100px] w-auto font-medium items-center justify-between p-8 lg:px-20 lg:py-8`}
        >
            <a href="/">
                <img src={Logo} alt="oclas" width={90} height={35} />
            </a>
            <nav
                className={`fixed top-[105px] pb-7 left-0 bottom-[58%] gap-7 bg-white z-50 flex transition duration-900 border-b border-stone-100 right-0 flex-col justify-center items-center ${open ? "hidden translate-y-[-100%]" : " flex translate-y-0"
                    } md:translate-y-0 md:flex md:sticky md:top-0 md:left-0 md:right-0 md:bottom-0 md:border-0 md:flex-row md:justify-between md:w-full md:duration-0  md:max-w-sm md:pb-0`}
            >
                <li
                    className="list-none bg-gradient-to-b from-stone-500 cursor-pointer to-black text-transparent transition-all delay-100 duration-500 bg-clip-text hover:text-black hover:scale-100"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    {Navlinks[0]}
                </li>
                <li
                    className=" list-none bg-gradient-to-b from-stone-500 cursor-pointer to-black text-transparent transition-all delay-100 duration-500 bg-clip-text hover:text-black hover:scale-100"
                    onClick={() => window.scrollTo({ top: 2150, behavior: "smooth" })}
                >
                    {Navlinks[1]}
                </li>
                <li
                    className="list-none bg-gradient-to-b from-stone-500 cursor-pointer to-black text-transparent transition-all delay-100 duration-500 bg-clip-text hover:text-black hover:scale-100"
                    onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight - 1800, behavior: "smooth" })}
                >
                    {Navlinks[2]}
                </li>
                <li
                    className="list-none bg-gradient-to-b from-stone-500 cursor-pointer to-black text-transparent transition-all delay-100 duration-500 bg-clip-text hover:text-black hover:scale-100 "
                    onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight - 300, behavior: "smooth" })}
                >
                    {Navlinks[3]}
                </li>
            </nav>
            <a href="#">
                <button
                    className="hidden md:flex w-[125px] h-[45px]  rounded-md border border-black justify-center items-center  group "
                >
                    <span className=" text-center z-20  hover:scale-100  cursor-pointer">
                        Explore
                    </span>
                </button>

            </a>
            <button
                className="text-xl transition-all duration-500 md:hidden"
                onClick={() => {
                    setopen(!open);
                }}
            >
                {open ? <RiMenu3Line /> : <IoCloseSharp />}
            </button>
        </header>
    );
}

export default Navbar;
