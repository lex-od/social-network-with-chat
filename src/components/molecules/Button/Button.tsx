import { FC } from "react";
import Loader from "@/components/molecules/Loader/Loader";

export type ButtonProps = {
  isLoading?: boolean;
} & JSX.IntrinsicElements["button"];

const Button: FC<ButtonProps> = ({ isLoading, children, ...buttonProps }) => {
  return (
    <button
      className="inline-flex justify-center min-w-24 py-2 px-5 align-middle bg-violet-500 rounded-xl transition-colors duration-300 hover:bg-violet-500/80"
      {...buttonProps}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};

export default Button;
