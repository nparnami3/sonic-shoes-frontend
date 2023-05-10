import {GoLocation} from "react-icons/go";
import {IoMdContacts} from "react-icons/io";
import { MdEmail, MdForum ,MdSmartphone} from "react-icons/md";
import Link from "next/link";


const ContactCard = () => {
    return (
        <div className="section ">
            <div className="container ">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-[4rem] mb-[2rem]">
                    <div className="grid_card  w-full md:w-[370px] h-[350px] ">
                        <i className=""> <MdEmail /> </i>
                        <h2>Email</h2>
                        <p>Monday to Saturday Expected </p>
                        <p className="last_para">response time: 72 hours </p>
                        <Link href="/" className="text-red-600 text-[18px]">  Send Email <span>-&gt;</span></Link>
                    </div>

                    <div className="grid_card w-full md:w-[370px] h-[350px]">
                        <i > <GoLocation  /> </i>
                        <h2>Address</h2>
                        <p>Phoenix Marketcity</p>
                        <p className="last_para"> Sonic Shoes ,Shop No 52, Viman Nagar, Pune, Maharashtra 411014 </p>
                        <Link href="/" className="text-red-600 text-[18px]" >  Visit Now <span>-&gt;</span></Link>
                    </div>

                    <div className="grid_card w-full md:w-[370px] h-[350px]">
                        <i> <MdSmartphone/> </i>
                        <h2>Call Us</h2>
                        <p>1800 102 6453 </p>
                        <p className="last_para">Monday to Saturday <br/>(07:30 to 18:30)</p>
                        <Link href="/" className=" text-red-600 text-[18px] ">  Ask The Community <span>-&gt;</span></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactCard;