"use client"

import { useState } from "react"
import Image from "next/image"
import About1 from "@/assets/images/about1.png"
import About2 from "@/assets/images/about2.png"
import user1 from "@/assets/images/user1.svg"
import user2 from "@/assets/images/user2.svg"
import user3 from "@/assets/images/user3.svg"
import user4 from "@/assets/images/user4.svg"
import user5 from "@/assets/images/user5.svg"

const defaultContent = {
    badge: "Popular",
    heading: "Design for how people think",
    body: "Custom UX to fit user needs to increase productivity.",
    image1: About1,
    image2: About2,
}

const hoveredContent = {
    badge: "New",
    heading: "Making Collaboration a breeze",
    body: "Seamlessly communicate with your co-workers using synergycloud.",
    image1: About2,
    image2: About1,
}

const Avatar = [user1, user2, user3, user4, user5]

export default function HoveredContent() {
    const [isHovered, setIsHovered] = useState(false)

    const content = isHovered ? hoveredContent : defaultContent

    const handleMouseEnter = () => {
        if (window.matchMedia("(hover: hover) and (pointer: fine)").matches)
            setIsHovered(true)
    }
    const handleMouseLeave = () => setIsHovered(false)

    return (
        <div
            className="  lg:order-1 w-full relative group ms-18 md:ms-0 h-[209px] sm:h-[324px] md:h-[565px] lg:h-[563px]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className="inline-block mt-0 :mlgt-9.5 ms-13.5 lg:ms-[145px]  ">
                <svg
                    className="hidden md:block fill-[#FBBF24] group-hover:fill-blue-400 transition-colors duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="354"
                    height="427"
                    viewBox="0 0 354 427"
                >
                    <path d="M316.42 97.7546C308.41 51.0514 304.406 27.6999 287.978 13.8499C271.551 0 247.858 0 200.473 0H117.639C62.1834 0 34.4556 0 17.2278 17.2278C-9.15527e-05 34.4557 -9.15527e-05 62.1835 -9.15527e-05 117.639V301.094C-9.15527e-05 365.56 -9.15527e-05 397.793 20.8013 415.414C41.6027 433.034 73.397 427.733 136.986 417.131L248.104 398.605C303.037 389.446 330.504 384.867 344.664 364.942C358.824 345.018 354.118 317.573 344.704 262.683L316.42 97.7546Z" />
                </svg>
                <svg
                    className="block md:hidden fill-[#FBBF24] group-hover:fill-blue-400 transition-colors duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="135"
                    height="163"
                    viewBox="0 0 354 427"
                >
                    <path d="M316.42 97.7546C308.41 51.0514 304.406 27.6999 287.978 13.8499C271.551 0 247.858 0 200.473 0H117.639C62.1834 0 34.4556 0 17.2278 17.2278C-9.15527e-05 34.4557 -9.15527e-05 62.1835 -9.15527e-05 117.639V301.094C-9.15527e-05 365.56 -9.15527e-05 397.793 20.8013 415.414C41.6027 433.034 73.397 427.733 136.986 417.131L248.104 398.605C303.037 389.446 330.504 384.867 344.664 364.942C358.824 345.018 354.118 317.573 344.704 262.683L316.42 97.7546Z" />
                </svg>
            </span>

            <div className="absolute z-20 left-0 top-0 flex items-end gap-2 md:gap-7">
                <div className="flex flex-col items-end gap-2 md:gap-7 w-full">
                    <div className="group-hover:scale-105 transition-all duration-300 p-1.75 sm:p-4.5 border-3 bg-white border-[#0F172A] rounded-xl max-w-[115px] sm:max-w-[311px] w-full flex flex-col items-start">
                        <span className="bg-blue-100 group-hover:bg-[#B4E5FE] rounded-[4px] px-2.75 py-0.75 text-blue-800 group-hover:text-[#22739C] transition-all duration-300 text-[6px] sm::text-base leading-[140%] font-display">
                            {content.badge}
                        </span>
                        <h3 className="my-1 sm:my-2.75 text-[#0F172A] text-[8px] sm:text-2xl font-medium font-roboto text-start transition-opacity duration-300">
                            {content.heading}
                        </h3>
                        <p className="text-[6px] sm:text-base text-[#475569] leading-[140%] transition-opacity duration-300">
                            {content.body}
                        </p>
                    </div>

                    <div className="group-hover:scale-105 transition-all duration-300 border-3 border-[#0F172A] rounded-xl overflow-hidden max-w-[98px] md:max-w-[264px] w-full h-[130px] md:h-[351px] ">
                        <Image
                            key={isHovered ? "img1-hovered" : "img1-default"}
                            src={content.image1}
                            alt="thumbnail"
                            width={265}
                            height={352}
                            className="object-cover w-full h-full animate-fadeIn"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-start gap-2 md:gap-7 w-full">
                    <div className="group-hover:scale-105 transition-all duration-300 border-3 border-[#0F172A] rounded-xl overflow-hidden max-w-[135px] md:max-w-[365px] h-[145px] md:h-[392px]  ">
                        <Image
                            key={isHovered ? "img2-hovered" : "img2-default"}
                            src={content.image2}
                            alt="thumbnail"
                            width={366}
                            height={393}
                            className="object-cover w-full h-full animate-fadeIn"
                        />
                    </div>

                    <div className="flex -space-x-1.75 sm:-space-x-4">
                        {Avatar.map((user, index) => (
                            <div
                                key={index}
                                className="relative w-5 sm:w-14 h-5 sm:h-14 rounded-full border sm:border-3 border-[#0F172A] overflow-hidden"
                                style={{ zIndex: Avatar.length - index }}
                            >
                                <Image
                                    src={user}
                                    alt="user thumbnail"
                                    className="w-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}