import * as yup from "yup"

export const signupSchema = yup.object({
    name: yup
        .string()
        .min(2, "Name must be at least 2 characters")
        .required("Full name is required"),
    email: yup
        .string()
        .email("Enter a valid email address")
        .required("Email is required"),
    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
})

export const contactSchema = yup.object({
    firstName: yup
        .string()
        .min(2, "First name must be at least 2 characters")
        .required("First name is required"),
    lastName: yup
        .string()
        .min(2, "Last name must be at least 2 characters")
        .required("Last name is required"),
    email: yup
        .string()
        .email("Enter a valid email address")
        .required("Email is required"),
    phone: yup
        .string()
        .matches(/^\+?[0-9\s\-()]{7,15}$/, "Enter a valid phone number")
        .required("Phone number is required"),
    message: yup
        .string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
})

export type SignupFormData  = yup.InferType<typeof signupSchema>
export type ContactFormData = yup.InferType<typeof contactSchema>
