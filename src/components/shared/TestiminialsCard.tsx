import { TestimonialIcon } from "@/assets/CustomIcons";

interface TestimonialProps {
    text: string,
    name: string,
    designation: string
}

export default function TestimonialCard({ text, name, designation }: TestimonialProps) {
    return (
        <div className="shrink-0 bg-[#EEEDF5] rounded-xl py-3 sm:py-7.5 px-3 sm:px-8.5 max-w-[175px] sm:max-w-[396px] h-50 sm:h-[451px] flex flex-col items-start justify-between ">
            <div className="flex flex-col items-start gap-0.5 sm:gap-2.5">
                <span className="hidden sm:block">
                    <TestimonialIcon />
                </span>
                <span className="block sm:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="25" viewBox="0 0 36 25" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.56749 5.50597C7.13097 5.3698 7.70694 5.30124 8.2847 5.30158C12.86 5.30158 16.5679 9.5391 16.5679 14.7642C16.5679 19.9909 12.86 24.2284 8.2847 24.2284C3.70939 24.2284 0 19.9925 0 14.7642C0 14.6113 0.00292539 14.4569 0.0102389 14.304H0C0 6.41713 5.61674 0 12.5207 0V3.17658C10.2813 3.17658 8.21595 4.04718 6.56749 5.50597ZM25.1057 5.50597C25.6586 5.37179 26.232 5.30158 26.82 5.30158C31.3953 5.30158 35.1047 9.5391 35.1047 14.7642C35.1047 19.9909 31.3953 24.2284 26.82 24.2284C22.2446 24.2284 18.5367 19.9925 18.5367 14.7642C18.5367 14.6113 18.5396 14.4569 18.547 14.304H18.5367C18.5367 6.41713 24.1535 0 31.0574 0V3.17658C28.8165 3.17658 26.7541 4.04718 25.1057 5.50597Z" fill="#9FCBE1" />
                    </svg>
                </span>
                <p className="text-xs sm:text-[28px] font-medium text-[#413D45] leading-4 sm:leading-9.5 ">{text}</p>
            </div>
            <p className="text-sm font-medium text-[#67646A] leading-5"> {name} , <span >{designation}</span>
            </p>

        </div>
    )
}