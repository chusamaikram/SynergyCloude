import SectionHeading from "@/components/shared/SectionHeading";
import { BasicPlanLogo, ProPlanLogo, EnterprisePlanLogo } from "@/assets/CustomIcons";
import PriceCard from "@/components/shared/PriceCard";

export interface PriceCardProps {
    id: number,
    logo: React.ReactNode,
    plan: string,
    users: string,
    desc: string,
    price: string,
    benefits: string[],
    path: string,
    isPopular: boolean
}



export default function PricingSection() {

    const PricingCards: PriceCardProps[] = [
        {
            id: 1,
            logo: <BasicPlanLogo />,
            plan: "Basics",
            users: "For Individuals",
            desc: "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. ",
            price: "$99",
            benefits: ["All analytics features", "Up to 250,000 tracked visits", "Normal support", "Up to 3 team members"],
            path: "",
            isPopular: false
        },
        {
            id: 2,
            logo: <ProPlanLogo />,
            plan: "Pro",
            users: "For Startups",
            desc: "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. ",
            price: "$199",
            benefits: ["All analytics features", "Up to 1,000,000 tracked visits", "Premium support", "Up to 10 team members"],
            path: "",
            isPopular: true
        },
        {
            id: 3,
            logo: <EnterprisePlanLogo />,
            plan: "Enterprise",
            users: "For big companies",
            desc: "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. ",
            price: "$399",
            benefits: ["All analytics features", "Up to 5,000,000 tracked visits", "Dedicated support", "Up to 50 team members"],
            path: "",
            isPopular: false
        },

    ]
    return (
        <section id="pricing" className="py-5 lg:py-[78px] bg-[#EEEDF5] ">
            <div className="container">
                <div className="mx-auto flex flex-col items-center gap-2 sm:gap-3.25">
                    <SectionHeading >Affordable pricing plans</SectionHeading>
                    <p className="text-xs sm:text-[21px] text-[#6F6C90] leading-9 ">Flexible Plans Tailored to Your Goals</p>
                    <div className="my-4.5 flex items-center gap-3.5">
                        <p className="text-xs sm:text-[21px] text-[#170F49] leading-9"> How many users you have?</p>
                        <span className="py-3.75 sm:py-[17px] px-5 sm:px-[47px] inline-block bg-white rounded-[17px] border border-[#D9DBE9] text-[#170F49] text-2xl font-bold text-center ">10</span>
                        <span className="text-[#170F49] text-xs sm:text-2xl font-bold" >Users</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center lg:items-start h-full justify-center gap-4 lg:gap-8.5">
                    {PricingCards.map((card) => (
                        <PriceCard key={card.id} {...card} />
                    ))}
                </div>
            </div>

        </section>
    )
}