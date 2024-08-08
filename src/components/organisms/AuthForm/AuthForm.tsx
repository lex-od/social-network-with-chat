"use client";
import { FC } from "react";
import { AtSign, KeyRound } from "lucide-react";
import FormInput from "@/components/molecules/FormInput/FormInput";
import Button from "@/components/molecules/Button/Button";

interface AuthFormProps {
  type: "login" | "register";
}

const AuthForm: FC<AuthFormProps> = ({ type }) => {
  return (
    <div>
      <FormInput placeholder="Enter email" Icon={AtSign} />
      <FormInput placeholder="Enter password" Icon={KeyRound} />

      <Button>{type === "login" ? "Login" : "Register"}</Button>
    </div>
  );
};

export default AuthForm;
