
import SectionHeading from "@/components/shared/SectionHeading"
import HoveredContent from "../HoverEffect"

export default function AboutSection() {

    return (
        <section id="about-us" className="mt-3.25 mb-17.5 md:mt-23.5 lg:mb-23.5 ">
            <div className="container">
                <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-23.5 items-center w-full ">

                   <HoveredContent />
                   
                    <div className="w-full order-2 flex flex-col items-start gap-0 lg:gap-9.5">
                        <SectionHeading className=" text-2xl! md:text-4xl! lg:text-[65px]! font-bold! md:font-extrabold!">About Us</SectionHeading>
                        <p className="text-base md:text-2xl text-[#0F172A] leading-[180%] text-start w-full">
                            At SynergyCloud, we believe that seamless communication is the backbone of productive teams.
                            Designed for the modern workplace, our platform fosters real-time collaboration, efficient
                            communication, and organized workflows. Whether your team is remote, hybrid, or in-office,
                            we make staying connected effortless.
                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
