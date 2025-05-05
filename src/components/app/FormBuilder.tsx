
import { FormBuilderProps, FormFieldConfig } from "@/types/FormTypes";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { FormSubmit } from "./FormSubmit";
import { FormField } from "./FormField";
import { motion } from "framer-motion";

export default function FormBuilder<T extends FieldValues>({ 
    fields, 
    onSubmit, 
    defaultValues,
    footer, 
    submitLabel = "Submit",  
  }: FormBuilderProps<T>){
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<T>({defaultValues});
    const formVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visiable: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01],
            }
        },
    }
    const handleValidSubmit: SubmitHandler<T> = (data) => {
        onSubmit(data);
    }
    
    return(
        <motion.form onSubmit={handleSubmit(handleValidSubmit)} className="space-y-4" initial="hidden" animate="visiable"  variants={formVariants}>
            {fields.map((field: FormFieldConfig) =>  {
                const shareProps = {
                    field,
                    register,
                    error: errors[field.name as keyof typeof errors],
                }
                return(
                    <FormField key={field.name} {...shareProps} />
            )
            })}
            <motion.div>
                <FormSubmit label={submitLabel} isLoading={isSubmitting}/>
            </motion.div>
            {footer && <div className="text-center text-sm text-muted-foreground">{footer}</div>}
        </motion.form>
    )

}