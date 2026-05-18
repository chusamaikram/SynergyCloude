
"use client"

import { useState } from "react";
import TestimonialCard from "@/components/shared/TestiminialsCard";

export default function TestimonialSlider() {
    const [paused, setPaused] = useState(false);
    const TestimonialsData = [
        {
            name: "Sarah Johnson",
            designation: "Product Designer",
            text: "This platform completely transformed how our team collaborates and manages projects efficiently.",
        },
        {
            name: "Michael Chen",
            designation: "Frontend Developer",
            text: "The user experience is outstanding and the workflow integration saved us countless hours every week.",
        },
        {
            name: "Emily Rodriguez",
            designation: "Marketing Manager",
            text: "Our communication and campaign planning became much smoother after switching to this solution.",
        },
        {
            name: "David Kim",
            designation: "Startup Founder",
            text: "An incredibly polished product with features that genuinely help teams stay productive and aligned.",
        },
        {
            name: "Olivia Brown",
            designation: "UI/UX Researcher",
            text: "The intuitive interface and thoughtful design make collaboration feel seamless and natural.",
        },
        {
            name: "James Wilson",
            designation: "Software Engineer",
            text: "Reliable, fast, and beautifully designed. It has become an essential tool in our daily workflow.",
        },
        {
            name: "Sophia Martinez",
            designation: "Project Coordinator",
            text: "Managing multiple teams and deadlines is now far easier thanks to the organized workspace features.",
        },
        {
            name: "Daniel Lee",
            designation: "Creative Director",
            text: "A perfect balance of functionality and aesthetics. Our entire creative process feels more connected.",
        },
    ]
    return (
        <div
            className="mt-6 mb-15.5 overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* inner strip: animates, paused via inline style */}
            <div
                className="flex items-start gap-6.25 w-max animate-marquee"
                style={{ animationPlayState: paused ? "paused" : "running" }}
            >
                {[...TestimonialsData, ...TestimonialsData].map((card, index) => (
                    <TestimonialCard
                        key={`${card.name}-${index}`}
                        name={card.name}
                        text={card.text}
                        designation={card.designation}
                    />
                ))}
            </div>
        </div>
    )

}