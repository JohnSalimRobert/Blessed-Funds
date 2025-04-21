import { FormFieldConfig } from "@/types/FormTypes";

export const forgotPasswordFields: FormFieldConfig[] = [
    {
        name: "email",
        type: "email",
        label: "Email",
        placeholder: "you@example.com",
        validation: {
            required: "Email is required",
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
            },
        },
    },
];