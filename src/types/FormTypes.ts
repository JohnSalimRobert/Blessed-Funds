import { DefaultValues, FieldValues, RegisterOptions } from "react-hook-form";

type FormFieldType = "text" | "email" | "password" | "select";

export interface InputFieldProps {
  field: FormFieldConfig;
  register: any;
  error: any;
};

export interface FormSubmitProps {
  label: string;
  isLoading?: boolean;
}


export interface FormFieldConfig {
  name: string;
  label: string;
  type: FormFieldType;
  placeholder: string;
  validation?: RegisterOptions;
}

export interface FormBuilderProps<T extends FieldValues> {
  fields: FormFieldConfig[];
  submitLabel: string;
  onSubmit: (data: T) => void;
  defaultValues?: DefaultValues<T>;
  footer?: React.ReactNode;
}