import { PriceCardProps } from "@/components/features/home/PricingSection";
import { Check } from "lucide-react";
import Button from "./Button";

export default function PriceCard({ isPopular, logo, plan, users, desc, price, benefits, path }: PriceCardProps) {

    const styles = {
        card:      isPopular ? "bg-[#22739C]"              : "bg-white hover:bg-[#22739C]",
        logoBg:    isPopular ? "bg-white"                  : "bg-[#ECEBFF] group-hover:bg-white",
        users:     isPopular ? "text-[#EFF0F6]"            : "text-[#6F6C90] group-hover:text-[#EFF0F6]",
        plan:      isPopular ? "text-white"                : "text-[#170F49] group-hover:text-white",
        desc:      isPopular ? "text-[#D9DBE9]"            : "text-[#6F6C90] group-hover:text-[#D9DBE9]",
        price:     isPopular ? "text-white"                : "text-[#0F172A] group-hover:text-white",
        monthly:   isPopular ? "text-[#D9DBE9]"            : "text-[#6F6C90] group-hover:text-[#D9DBE9]",
        included:  isPopular ? "text-white"                : "text-[#170F49] group-hover:text-white",
        checkBg:   isPopular ? "bg-white"                  : "bg-[#22739C] group-hover:bg-white",
        checkIcon: isPopular ? "text-[#22739C]"            : "text-white group-hover:text-[#22739C]",
        benefit:   isPopular ? "text-[#D9DBE9]"            : "text-[#170F49] group-hover:text-[#D9DBE9]",
        button:    isPopular ? "bg-white! text-[#22739C]!" : "bg-[#22739C]! group-hover:bg-white! group-hover:text-[#22739C]!",
    }
  

    return (
        <div className={`relative h-full py-7 sm:py-[47px] group px-7 sm:px-12.5 rounded-[28px] ${styles.card} transition-colors duration-300 border border-[#EFF0F6] shadow-[0_2.353px_14.117px_0_rgba(20,20,43,0.08)]`}>

            {isPopular && (
                <div className="absolute top-5 sm:top-7.5 right-5 sm:right-7 py-2 sm:py-3.5 px-4 sm:px-7 rounded-md sm:rounded-xl bg-[rgba(255,255,255,0.20)] backdrop-blur-md text-white text-base">
                    Popular
                </div>
            )}

            <div className="py-2.75 flex flex-col items-start">

                {/* logo + plan name */}
                <div className="flex items-center gap-5.25">
                    <div className={`h-[84px] w-[84px] ${styles.logoBg} p-5 rounded-[18px] flex items-center justify-center transition-colors duration-300`}>
                        {logo}
                    </div>
                    <div>
                        <span className={`text-xs sm:text-[21px] font-medium transition-colors duration-300 ${styles.users}`}>
                            {users}
                        </span>
                        <h3 className={`text-base sm:text-[28px] font-bold leading-[145%] transition-colors duration-300 ${styles.plan}`}>
                            {plan}
                        </h3>
                    </div>
                </div>

                {/* description */}
                <p className={`mt-5.25 mb-3.5 text-xs sm:text-[21px] leading-5 sm:leading-8.75 transition-colors duration-300 ${styles.desc}`}>
                    {desc}
                </p>

                {/* price */}
                <div className="flex items-end  gap-3">
                    <span className={`text-4xl sm:text-[63px] font- leading-11 sm:leading-19.25 transition-colors duration-300 ${styles.price}`}>
                        {price}
                    </span>
                    <span className={`text-[13px] sm:text-2xl font-medium transition-colors duration-300 ${styles.monthly}`}>
                        /monthly
                    </span>
                </div>

                {/* benefits */}
                <div className="my-2.75 sm:my-5">
                    <h4 className={` text-xs sm:text-[21px] font-bold sm:font-medium leading-6 transition-colors duration-300 ${styles.included}`}>
                        What's included
                    </h4>
                    <ul className="mt-2.75 sm:mt-7 flex flex-col gap-2.5 sm:gap-4.5 items-start">
                        {benefits.map((item, index) => (
                            <li key={index} className="flex items-center gap-4">
                                <span className={`flex items-center justify-center w-7.5 h-7.5 rounded-full overflow-hidden transition-colors duration-300 ${styles.checkBg}`}>
                                    <Check
                                        size={16}
                                        className={`transition-colors duration-300 ${styles.checkIcon}`}
                                    />
                                </span>
                                <p className={` text-xs sm:text-[21px] leading-6 transition-colors duration-300 ${styles.benefit}`}>
                                    {item}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* cta */}
                <div className="mt-3.25 sm:mt-6.5 w-full">
                    <Button
                        variant="primary"
                        href={path}
                        className={`w-full! text-xs! sm:text-[21px]! leading-[normal]! ${styles.button}`}
                    >
                        Get Started
                    </Button>
                </div>

            </div>
        </div>
    )
}
