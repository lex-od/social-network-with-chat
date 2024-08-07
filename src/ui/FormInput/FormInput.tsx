import clsx from "clsx";
import { LucideIcon } from "lucide-react";
import { forwardRef } from "react";
import css from "./FormInput.module.scss";

export type FormInputProps = {
  error?: string;
  Icon?: LucideIcon;
} & JSX.IntrinsicElements["input"];

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ error, Icon, className, ...restProps }, ref) => {
    return (
      <div className={clsx(css.formInput, className)}>
        {Icon && (
          <Icon className="text-neutral-400 transition-colors duration-300" />
        )}

        <input
          className="w-0 grow bg-transparent outline-none placeholder:text-neutral-400"
          ref={ref}
          {...restProps}
        />

        {error && (
          <p
            className="absolute top-full text-red-600 text-xs"
            style={{ transform: "translateZ(0)" }} // fix text style change
            role="alert"
            aria-live="assertive"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;
