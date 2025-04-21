import { FormFieldConfig } from "@/types/FormTypes";

export const loginFields: FormFieldConfig[] = [
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "you@example.com",
    validation: {
      required: "Email is required",
    },
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
    validation: {
      required: "Password is required",
    },
  },
];
