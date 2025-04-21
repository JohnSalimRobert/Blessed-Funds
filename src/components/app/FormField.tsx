import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputFieldProps } from "@/types/FormTypes";


export const FormField = ({ field, register, error }: InputFieldProps) => (
  <div className="space-y-2">
    <Label htmlFor={field.name} className="text-zinc-800">{field.label}</Label>
    <Input
      name={field.name}
      type={field.type}
      placeholder={field.placeholder}
      {...register(field.name, field.validation)}
      aria-invalid={error ? "true" : "false"}
      aria-errormessage={error ? `${field.name}-error` : undefined}
      aria-required="true"
      aria-label={field.label}
      aria-describedby={error ? `${field.name}-error` : undefined}
      className="bg-slate-50 opacity-60 border border-zinc-300 focus-visible:border-indigo-500 transition-all duration-200 ease-in-out
      rounded-lg px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-opacity-50 focus-visible:ring-offset-2 focus-visible:scale-105"
    />
    {error && <p className="text-sm text-red-500">{error.message}</p>}
  </div>
);