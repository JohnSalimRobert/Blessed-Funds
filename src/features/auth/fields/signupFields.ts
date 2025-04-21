import { FormFieldConfig } from "@/types/FormTypes";

export const signupFields: FormFieldConfig[] = [
    {
        name: "firstName",
        type: "text",
        label: "First Name",
        placeholder: "John",
        validation: {
            required: "First name is required",
        },
    },
    {
        name: "lastName",
        type: "text",
        label: "Last Name",
        placeholder: "Doe",
        validation: {
            required: "Last name is required",
        },
    },
    {
        name: "email",
        type: "email",
        label: "Email",
        placeholder: "you@example.com",
        validation: {
            required: "Email is required",
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
            },
        },
    },
    {
        name: "password",
        type: "password",
        label: "Password",
        placeholder: "Enter your password",
        validation: {
            required: "Password is required",
            minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
            },
        },
    },
    {
        name: "confirmPassword",
        type: "password",
        label: "Confirm Password",
        placeholder: "Re-enter your password",
        validation: {
            required: "Please confirm your password",
            validate: (value: string, context: any) =>
                value === context.password || "Passwords must match",
        },
    },
];