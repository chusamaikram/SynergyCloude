import Link from "next/link";
import { LinkedlnIcon } from "@/assets/CustomIcons";
import logo from "@/assets/images/logo.svg"
import Image from "next/image";
import { Info, Phone, MapPin } from "lucide-react";

export default function Footer() {
    const NavLinks = [
        {
            label: "About Us",
            path: "#about-us",
        },
        {
            label: "Pricing",
            path: "#pricing",
        },
        {
            label: "Testimonials",
            path: "#testimonials",
        },
        {
            label: "Contact Us",
            path: "#contact-us",
        },
    ]
    const ContactData = [
        {
            label: "info@synergycloud.com",
            icon: Info,
            path: "mailto:info@synergycloud.com",
            iconWidth: 26,
            IconHeight: 26,
        },
        {
            label: "650-285-9974",
            icon: Phone,
            path: "tel:650-285-9974",
            iconWidth: 26,
            IconHeight: 26,
        },
        {
            label: "110 Nottingham Street Boston MA 02090",
            icon:MapPin,
            path: "https://maps.app.goo.gl/Hi9uJD7su8BKBC2k9",
            iconWidth: 28,
            IconHeight: 28,
        },
    ]
    return (
        <footer className="py-11.75 ">
            <div className="container">
                <div className="flex flex-col md:flex-row items-start justify-between gap-4 w-full ">
                    <div className="max-w-[263px] w-full flex flex-col items-start justify-between gap-4 md:h-[270px] ">
                        <div>
                            <Link href="/" aria-label="logo link" >
                                <Image
                                    src={logo}
                                    alt="logo"
                                />
                            </Link>
                            <p className="text-[#0F172A] text-base leading-5.25 mt-1" >Empower Your Team to Communicate, Collaborate, and Create—All in One Place!</p>
                        </div>
                        <Link href=""
                            aria-label="social link"
                            target="blank"
                        >
                            <LinkedlnIcon />
                        </Link>
                    </div>
                    <div className="">
                        <h2 className="text-[28px] font-semibold leading-8.5 mb-7 ">Quick Links</h2>
                        <ul className="flex flex-col items-start gap-4 lg:gap-7">
                            {NavLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.path} className="text-base lg:text-2xl text-[#0A1A17] hover:text-[#22739C]  leading-7 " >{link.label}</Link>
                                </li>
                            ))}

                        </ul>
                    </div>
                    <div className="max-w-75">
                        <h2 className="text-[28px] font-semibold leading-8.5 mb-5 ">Quick Links</h2>
                        <ul className="flex flex-col items-start gap-4.5">
                            {ContactData.map((item) => (
                                <li key={item.label} className="flex items-center gap-2.5">
                                    <span>
                                        <item.icon width={item.iconWidth} height={item.IconHeight} color="#233334" />
                                    </span>
                                    <Link href={item.path} target="blank" className="text-base md:text-2xl leading-7 text-[#0A1A17] hover:text-[#22739C]  ">{item.label} </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </footer >
    )
}