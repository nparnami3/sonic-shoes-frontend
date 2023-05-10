import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-14 pb-3">
            <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
                {/* LEFT START */}
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    {/* MENU START */}
                    <div className="flex flex-col gap-3 shrink-0">
                        <Link href="https://www.nike.com/in/retail" className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            Find a store
                        </Link>
                        <Link href="https://www.nike.com/in/" className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            become a partner
                        </Link>
                        <Link href="https://www.nike.com/in/" className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            sign up for email
                        </Link>
                        <Link href="https://www.nike.com/in/" className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            send us feedback
                        </Link>
                        <Link href="https://www.nike.com/in/" className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            student discount
                        </Link>
                    </div>
                    {/* MENU END */}

                    {/* NORMAL MENU START */}
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                get help
                            </div>
                            <Link href="localhost:3000/cart" className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Order Status
                            </Link>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Delivery
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Returns
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Payment Options
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Contact Us
                            </div>
                        </div>
                        {/* MENU END */}

                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <Link href="https://about.nike.com/en" className="font-oswald font-medium uppercase text-sm">
                                About nike
                            </Link>
                            <Link href="https://about.nike.com/en/newsroom" className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                News
                            </Link>
                            <Link href="https://jobs.nike.com/" className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Careers
                            </Link>
                            <Link href="http://investors.nike.com/" className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Investors
                            </Link>
                            <Link href="https://www.nike.com/in/sustainability" className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Sustainability
                            </Link>
                        </div>
                        {/* MENU END */}
                    </div>
                    {/* NORMAL MENU END */}
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-4 justify-center md:justify-start">
                    <div
                        onClick={() =>
                            window.open("https://www.facebook.com/nike", "_blank")
                        }
                        className="w-10 h-10 rounded-full bg-cyan-200 flex items-center justify-center text-black hover:bg-cyan-500 cursor-pointer"
                    >
                        <FaFacebookF size={20} />
                    </div>
                    <div 
                        onClick={() =>
                        window.open("https://twitter.com/nikestore", "_blank")
                        }
                       
                        className="w-10 h-10 rounded-full bg-cyan-200 flex items-center justify-center text-black hover:bg-cyan-500 cursor-pointer"
                    >
                        <FaTwitter size={20} />
                    </div>
                    <div onClick={() =>
                        window.open("https://www.youtube.com/@nike", "_blank")
                        }
                    className="w-10 h-10 rounded-full bg-cyan-200 flex items-center justify-center text-black hover:bg-cyan-500 cursor-pointer">
                        <FaYoutube size={20} />
                    </div>
                    <div onClick={() =>
                        window.open("https://www.instagram.com/nike", "_blank")
                        }
                     className="w-10 h-10 rounded-full bg-cyan-200 flex items-center justify-center text-black hover:bg-cyan-500 cursor-pointer">
                        <FaInstagram size={20} />
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
            <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                {/* LEFT START */}
                <div  onClick={() =>
                        window.open("https://www.nike.com/in/", "_blank")
                        }
                className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
                    © 2023 Nike, Inc. All Rights Reserved
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div  onClick={() =>
                        window.open("https://www.nike.com/in/", "_blank")
                        }
                className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    <div  onClick={() =>
                        window.open("https://www.nike.com/in/", "_blank")
                        }
                    className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Guides
                    </div>
                    <div onClick={() =>
                        window.open("https://www.nike.com/in/", "_blank")
                        }
                    className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Terms of Sale
                    </div>
                    <div  onClick={() =>
                        window.open("https://www.nike.com/in/", "_blank")
                        }
                    className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Terms of Use
                    </div>
                    <div onClick={() =>
                        window.open("https://www.nike.com/in/", "_blank")
                        }
                    className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Privacy Policy
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
        </footer>
    );
};

export default Footer;
