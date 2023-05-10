import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";

import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";


import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
// import {VscClose} from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc"
import { fetchDataFromApi } from "@/utils/api";
import { useSelector } from "react-redux";


const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [categories, setCategories] = useState(null);

    const { cartItems } = useSelector((state) => state.cart);

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("-translate-y-[80px]");
            } else {
                setShow("shadow-sm");
            }
        } else {
            setShow("translate-y-0");
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        const { data } = await fetchDataFromApi("/api/categories?populate=*");
        setCategories(data);
    };

    return (
        <header
            className={`w-full h-[50px] md:h-[80px] bg-black  flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
        >
            <Wrapper className="h-[60px] flex justify-between items-center text-white">
                <div className="absolute inset-y-0 left-[14px] top-[16px] md:left-[112px] md:top-[22px]">
                <Link href="/">
                    <img src="/logo.png" className="w-[40px]  md:w-[60px] ml-[10px] " />
                </Link>
                </div>
                <span className="text-cyan-200 font-orbit text-[1.5rem] left-[80px]  justify-self-start md:text-[2.2rem] absolute top-4.5 md:left-[200px]  ... ">Sonic</span>
                <span className=" text-white font-orbit  text-[1.5rem] left-[170px] justify-self-start md:text-[2.2rem] absolute top-4.5 md:left-[325px]  ... ">Shoes</span>
               
                <Menu 
                    showCatMenu={showCatMenu}
                    setShowCatMenu={setShowCatMenu}
                    categories={categories}
                />
               
                {mobileMenu && (
                    <MenuMobile
                        showCatMenu={showCatMenu}
                        setShowCatMenu={setShowCatMenu}
                        setMobileMenu={setMobileMenu}
                        categories={categories}
                    />
                )}
                

                <div className="flex items-center gap-2 text-white">
                    {/* Icon start */}
                    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full md:left-[85px] flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative left-[470px]">
                        <IoMdHeartEmpty className="text-[26px] md:text-[24px]" />
                        <div className="h-[14px] md:h-[18px]  min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[12px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                            51
                        </div>
                    </div>
                    {/* Icon end */}

                    {/* Icon start */}
                    <Link href="/cart">
                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full md:left-[75px] left-[480px] flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                            <BsCart className="text-[22px] md:text-[20px]" />
                            {cartItems.length > 0 && (
                                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                                    {cartItems.length}
                                </div>
                            )}
                        </div>
                    </Link>
                    {/* Icon end */}
                   

                    {/* Mobile icon start */}
                    <div className="w-24  h-24  rounded-full sm:ml-[450px] flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2 ">
                        {mobileMenu ? (
                            <VscChromeClose
                                className="text-[20px] ml-5"
                                onClick={() => setMobileMenu(false)}
                            />
                        ) : (
                            <BiMenu
                                className="text-[30px]  ml-5 mt-1"
                                onClick={() => setMobileMenu(true)}
                            />
                        )}
                    </div>
                    {/* Mobile icon end */}
                </div>
            </Wrapper>
        </header>
    );
};

export default Header;
