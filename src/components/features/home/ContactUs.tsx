"use client"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { LocationIcon, MailIcon, PhoneIcon, ContactFormElipse1 } from "@/assets/CustomIcons"
import Link from "next/link"
import FormInput from "@/components/shared/FormInput"
import Button from "@/components/shared/Button"
import { contactSchema, type ContactFormData } from "@/lib/schemas"

export default function ContactUsSection() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormData>({ resolver: yupResolver(contactSchema) })

    const onSubmit = (data: ContactFormData) => {
        console.log("Contact data:", data)
    }

    const ContactData = [
        {
            label: "phone",
            src: "+1012 3456 789",
            icon: <PhoneIcon />,
            path: "tel:+10123456789",
        },
        {
            label: "email",
            src: "demo@gmail.com",
            icon: <MailIcon />,
            path: "mailto:demo@gmail.com",
        },
        {
            label: "location",
            src: "132 Dartmouth Street Boston, Massachusetts 02156 United States",
            icon: <LocationIcon />,
            path: "132 Dartmouth Street Boston, Massachusetts 02156 United States",
        },
    ]

    return (
        <section id="contact-us" className="py-5 lg:py-[89px]">
            <div className="container">
                <div className="mx-0 lg:mx-auto lg:bg-white lg:shadow-[0_0_70.583px_35.292px_rgba(0,0,0,0.03)] p-0 sm:p-2.5 rounded-xl flex flex-col lg:flex-row items-start lg:items-center max-w-[1308px] gap-8.75">

                    {/* ── left info panel ── */}
                    <div className="p-4 lg:p-11.75 lg:h-[761px] relative bg-[#22739C] rounded-xl max-w-[536px] w-full">
                        <h2 className="text-2xl sm:text-[37px] font-poppins font-semibold text-white">Contact Us</h2>
                        <p className="text-[#C9C9C9] text-base sm:text-2xl">Say something to start a live chat!</p>
                        <ul className="mt-2.75 lg:mt-[131px] flex flex-col items-start gap-2.75 lg:gap-14">
                            {ContactData.map((item) => (
                                <li key={item.label} className="flex items-center gap-2.25 sm:gap-7.25">
                                    <span>{item.icon}</span>
                                    <Link href={item.path} target="_blank" className="text-base sm:text-2xl text-white">
                                        {item.src}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <span className="hidden lg:block absolute bottom-21 z-10 right-10">
                            <ContactFormElipse1 />
                        </span>
                        <span className="absolute bottom-[-101px] right-[-146px] hidden lg:block w-[316px] h-[316px] rounded-full bg-white/12 z-10" />
                    </div>

                    {/* ── right form panel ── */}
                    <div className="max-w-[688px] w-full">
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full" noValidate>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-7 gap-y-2 sm:gap-y-23.75 w-full">
                                <FormInput
                                    labelfor="firstName"
                                    label="First Name"
                                    placeHolder="Usama"
                                    error={errors.firstName?.message}
                                    {...register("firstName")}
                                />
                                <FormInput
                                    labelfor="lastName"
                                    label="Last Name"
                                    placeHolder="Ikram"
                                    error={errors.lastName?.message}
                                    {...register("lastName")}
                                />
                                <FormInput
                                    labelfor="contact-email"
                                    label="Email"
                                    placeHolder="usama@gmail.com"
                                    type="email"
                                    error={errors.email?.message}
                                    {...register("email")}
                                />
                                <FormInput
                                    labelfor="phone"
                                    label="Phone Number"
                                    placeHolder="+923012345678"
                                    error={errors.phone?.message}
                                    {...register("phone")}
                                />
                            </div>

                            {/* message textarea */}
                            <div className="w-full mt-2      sm:mt-23.75 mb-2 sm:mb-13.25">
                                <div className="w-full flex flex-col-reverse items-start gap-2 sm:gap-6.75 pb-2 sm:pb-3 border-b-2 border-[#011C2A]">
                                    <textarea
                                        id="message"
                                        rows={1}
                                        placeholder="Write your message"
                                        className="peer text-base sm:text-2xl font-medium text-[#8D8D8D] resize-none w-full outline-none"
                                        {...register("message")}
                                    />
                                    <label
                                        htmlFor="message"
                                        className="text-xl sm:text-[28px] font-medium leading-6 text-[#8D8D8D] transition-all duration-200 peer-focus:text-[#011C2A]"
                                    >
                                        Message
                                    </label>

                                </div>
                                {errors.message && (
                                    <span className="text-sm text-red-500 mt-1">{errors.message.message}</span>
                                )}
                            </div>

                            <div className="w-full flex items-end justify-end">
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="text-base! lg:text-[21px]! border-2 border-[#0B608B] font-medium! md:font-bold! px-4! md:px-7! py-1.5! md:py-6!"
                                >
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
