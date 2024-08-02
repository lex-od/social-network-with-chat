import { LucideIcon } from "lucide-react";
import { FC } from "react";

export type FormInputProps = {
  placeholder?: string;
  error?: string;
  Icon?: LucideIcon;
} & JSX.IntrinsicElements["input"];

const FormInput: FC<FormInputProps> = ({ placeholder, error, Icon }) => {
  return <div>FormInput</div>;
};

export default FormInput;
