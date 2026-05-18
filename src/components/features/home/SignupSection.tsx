"use client"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import Button from "@/components/shared/Button"
import SectionHeading from "@/components/shared/SectionHeading"
import Gif from "@/assets/gifs/form-gif.gif"
import { signupSchema, type SignupFormData } from "@/lib/schemas"

export default function SignupSection() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupFormData>({ resolver: yupResolver(signupSchema) })

    const onSubmit = (data: SignupFormData) => {
        console.log("Signup data:", data)
        // TODO: call your API here
    }

    const fieldClass = "flex flex-col-reverse items-start gap-3.5 sm:gap-7 border-b-2 border-[#170F49] w-full"
    const labelClass = "text-xs sm:text-2xl font-normal text-[#170F49] leading-8.5 transition-all duration-200 peer-focus:text-sm sm:peer-focus:text-[28px] peer-focus:font-semibold"
    const inputClass = "peer outline-none w-full"

    return (
        <section className="bg-white sm:bg-[#EEE] py-0 sm:py-15">
            <div className="container">
                <div className="mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-center gap-[49px] lg:gap-[94px] w-full">
                    <div className="flex flex-col items-start gap-10 lg:gap-[75px] w-full max-w-[532px]">
                        <SectionHeading>Signup</SectionHeading>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-col items-start gap-9.75 lg:gap-18.5 w-full"
                            noValidate
                        >
                            {/* Full Name */}
                            <div className="w-full">
                                <div className={fieldClass}>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder=""
                                        className={inputClass}
                                        {...register("name")}
                                    />
                                    <label className={labelClass} htmlFor="name">Full Name</label>

                                </div>
                                {errors.name && (
                                    <span className="text-sm text-red-500 mt-1">{errors.name.message}</span>
                                )}
                            </div>

                            {/* Email */}
                            <div className="w-full">
                                <div className={fieldClass}>
                                    <input
                                        id="signup-email"
                                        type="email"
                                        className={inputClass}
                                        {...register("email")}
                                    />
                                    <label className={labelClass} htmlFor="signup-email">E-mail</label>

                                </div>
                                {errors.email && (
                                    <span className="text-sm text-red-500 mt-1">{errors.email.message}</span>
                                )}
                            </div>

                            {/* Password */}
                            <div className="w-full">
                                <div className={fieldClass}>
                                    <input
                                        id="password"
                                        type="password"
                                        className={inputClass}
                                        {...register("password")}
                                    />
                                    <label className={labelClass} htmlFor="password">Password</label>
                                </div>
                                {errors.password && (
                                    <span className="text-sm text-red-500 mt-1">{errors.password.message}</span>
                                )}
                            </div>

                            <Button variant="primary" type="submit" className="border-2 border-[#0B608B] text-[21px]!">
                                Create Account
                            </Button>
                        </form>
                    </div>

                    <div className="overflow-hidden max-w-[665px] bg-[#EEE] sm:bg-transparent rounded-xl w-full">
                        <img
                            src={Gif.src}
                            alt="form-gif"
                            width={800}
                            height={600}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
