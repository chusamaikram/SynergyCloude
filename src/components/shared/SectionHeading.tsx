
interface SectionHeadingProps {
    children: string,
    className?: string
}

export default function SectionHeading({ children, className }: SectionHeadingProps) {
    return (
        <h2 className={`text-[30px] lg:text-[56px] font-semibold lg:font-bold text-[#0F172A] leading-[150%] text-center ${className}`}>
            {children}

        </h2>
    )
}