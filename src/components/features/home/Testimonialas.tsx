
import SectionHeading from "@/components/shared/SectionHeading";
import TestimonialSlider from "./TestimonialSlider";

export default function Testimonials() {


    return (
        <section id="testimonials" className="py-7 sm:py-[65px]">
            <div className="mx-auto">
                <SectionHeading>Testimonials</SectionHeading>
                <p className="text-center text-[10px] sm:text-[21px] leading-[15px] sm:leading-8.75 text-[#6F6C90]">
                    See How Teams Are Thriving with SynergyCloud
                </p>
            </div>
            <TestimonialSlider />
        </section>
    )
}
