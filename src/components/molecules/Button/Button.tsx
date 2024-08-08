import { FC } from "react";
import Loader from "@/components/molecules/Loader/Loader";

export type ButtonProps = {
  isLoading?: boolean;
} & JSX.IntrinsicElements["button"];

const Button: FC<ButtonProps> = ({ isLoading, children, ...buttonProps }) => {
  return <button {...buttonProps}>{isLoading ? <Loader /> : children}</button>;
};

export default Button;
