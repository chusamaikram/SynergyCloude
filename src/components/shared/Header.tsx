
"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

import logo from "../../assets/images/logo.svg"
import Button from "./Button"

const NAV_LINKS = [
    { label: "About Us", path: "#about-us" },
    { label: "Pricing", path: "#pricing" },
    { label: "Testimonials", path: "#testimonials" },
    { label: "Contact Us", path: "#contact-us" },
]

const HERO_ID = "#hero"

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeHash, setActiveHash] = useState("")

    useEffect(() => {
        const sections = NAV_LINKS.map((link) =>
            document.getElementById(link.path.replace("#", ""))
        ).filter(Boolean)

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

                if (visibleSections.length === 0) return

                const top = visibleSections[0].target.id

                if (top === HERO_ID) {
                    setActiveHash("")
                } else {
                    setActiveHash(`#${top}`)
                }
            },
            {
                root: null,
                threshold: [0.1, 0.2, 0.4, 0.6],
                rootMargin: "-20% 0px -60% 0px",
            }
        )

        sections.forEach((section) => {
            if (section) observer.observe(section)
        })

        const handleHashChange = () => {
            setActiveHash(window.location.hash)
        }

        window.addEventListener("hashchange", handleHashChange)

        return () => {
            observer.disconnect()
            window.removeEventListener("hashchange", handleHashChange)
        }
    }, [])

    const isActive = (path: string) => activeHash === path

    return (
        <header className="sticky top-0 z-999 bg-white shadow-[0_2px_16px_0_rgba(15,23,42,0.06)]">
            <div className="container">
                <nav className="flex items-center justify-between gap-[113px] py-4.5">

                    {/* Logo */}

                    <Link
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className="shrink-0"
                    >
                        <Image
                            src={logo}
                            alt="synergy cloud logo"
                            width={266}
                            height={56}
                        />
                    </Link>

                    {/* Desktop Nav */}

                    <ul className="hidden items-center gap-2.5 xl:flex">
                        {NAV_LINKS.map((link) => (
                            <li
                                key={link.path}
                                className="relative px-4.5 py-4"
                            >
                                <Link
                                    href={link.path}
                                    onClick={() => setActiveHash(link.path)}
                                    className={`text-lg whitespace-nowrap transition-colors duration-200 ${isActive(link.path)
                                        ? "font-semibold text-[#22739C]"
                                        : "font-medium text-[#0F172A] hover:text-[#22739C]"
                                        }`}
                                >
                                    {link.label}
                                </Link>

                                {isActive(link.path) && (
                                    <span className="absolute bottom-1 left-4.5 right-4.5 h-0.5 rounded-full bg-[#22739C]" />
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Actions */}

                    <div className="flex items-center gap-4.5">

                        <div className="hidden items-center gap-4.5 md:flex">
                            <Link
                                href="/"
                                className="flex items-center justify-center px-2.25 py-3.5"
                            >
                                <span className="px-4.5 text-lg font-medium whitespace-nowrap text-[#22739C]">
                                    Log In
                                </span>
                            </Link>

                            <Button
                                variant="primary"
                                href="/"
                                className="border-2 border-[#22739C] !px-8 !py-3.5 text-lg! font-medium!"
                            >
                                Signup
                            </Button>
                        </div>

                        {/* Mobile Toggle */}

                        <button
                            type="button"
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            onClick={() => setMenuOpen((prev) => !prev)}
                            className="block p-1 text-[#0F172A] xl:hidden"
                        >
                            {menuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Drawer */}

            <div
                className={`overflow-hidden border-t border-[#EFF0F6] bg-white transition-all duration-300 ease-in-out xl:hidden ${menuOpen
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                    }`}
            >
                <div className="container flex flex-col gap-1 py-4">

                    <ul className="flex flex-col">
                        {NAV_LINKS.map((link) => (
                            <li key={link.path}>
                                <Link
                                    href={link.path}
                                    onClick={() => {
                                        setActiveHash(link.path)
                                        setMenuOpen(false)
                                    }}
                                    className={`block rounded-lg px-4 py-3 text-lg transition-colors ${isActive(link.path)
                                        ? "bg-[#f0f8ff] font-semibold text-[#22739C]"
                                        : "font-medium text-[#0F172A] hover:bg-[#f5f5f5] hover:text-[#22739C]"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col gap-3 border-t border-[#EFF0F6] pt-3 md:hidden">

                        <Link
                            href="/"
                            onClick={() => setMenuOpen(false)}
                            className="w-full rounded-[58px] border-2 border-[#22739C] py-3 text-center text-lg font-medium text-[#22739C]"
                        >
                            Log In
                        </Link>

                        <Button
                            variant="primary"
                            href="/"
                            onClick={() => setMenuOpen(false)}
                            className="w-full border-2 border-[#22739C] !px-8 !py-3.5 text-lg! font-medium!"
                        >
                            Signup
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}