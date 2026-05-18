import Button from "@/components/shared/Button";
import HeroHeading from "@/components/shared/HeroHeading";
import Image from "next/image";
import Screen from "../../../assets/images/Screen.png"
import herobg from "../../../assets/images/hero-bg.png"

export default function HeroSection() {
    return (
        <section id="hero" className="lg:py-[94px] md:min-h-screen">
            <div className="container">

                <div className="mx-auto flex flex-col items-center gap-10">
                    <div className="mx-auto">
                        <HeroHeading />
                        <p className="text-center text-base lg:text-[21px] text-[#0F172A] leading-[160%] font-display">Empower Your Team to Communicate, Collaborate, and Create—All in One Place!</p>
                    </div>
                    <Button variant="primary" showArrow href="/" className="border-2 border-[#0B608B] p-[8px_8px_8px_36px]! lg:p-[23px_29px_23px_56px]! text-lg! md:text-[28px]!  " >Start For Free</Button>
                </div>


                <div className="mt-11.5 md:mt-23.5 relative w-full ">
                    <div className="absolute -top-18 md:-top-60 -left-20 -right-4 md:-right-16">
                        <Image
                            src={herobg}
                            alt="hero bg"
                        />

                    </div>
                    <div className="relative z-10 overflow-hidden flex items-center justify-center w-full ">
                        <Image
                            src={Screen}
                            alt="screen mockup"
                            width={1294}
                            height={837}
                            className="object-cover "
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}