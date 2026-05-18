import { forwardRef } from "react"
import type { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    labelfor: string
    placeHolder?: string
    error?: string
}

const FormInput = forwardRef<HTMLInputElement, InputProps>(
    ({ label, labelfor, placeHolder, type = "text", error, ...rest }, ref,) => {
        return (
            <div>
                <div className="max-w-full lg:max-w-[327px] w-full flex flex-col-reverse items-start gap-2 sm:gap-6.75 pb-2 sm:pb-3 border-b-2 border-[#011C2A]">
                    <input
                        id={labelfor}
                        ref={ref}
                        type={type}
                        placeholder={placeHolder}
                        className="peer text-base sm:text-2xl font-medium leading-6 text-[#011C2A] outline-none w-full"
                        {...rest}
                    />
                    <label
                        htmlFor={labelfor}
                        className="text-xl sm:text-[28px] font-medium leading-6 text-[#8D8D8D] transition-all duration-200 peer-focus:text-[#011C2A]"
                    >
                        {label}
                    </label>

                </div>
                {error && (
                    <span className="text-sm text-red-500 mt-1">{error}</span>
                )}
            </div>
        )
    }
)

FormInput.displayName = "FormInput"

export default FormInput
