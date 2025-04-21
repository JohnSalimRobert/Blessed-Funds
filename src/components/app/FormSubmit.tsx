import { FormSubmitProps } from "@/types/FormTypes";
import { Button } from "../ui/button";

export const FormSubmit = ({ label, isLoading }: FormSubmitProps) => (
    <Button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-xl bg-indigo-500 text-white text-md py-2 hover:bg-indigo-600"
    >
        {label}
    </Button>
)