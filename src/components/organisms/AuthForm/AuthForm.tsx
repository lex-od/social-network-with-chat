"use client";
import { FC } from "react";
import { AtSign, KeyRound } from "lucide-react";
import FormInput from "@/components/molecules/FormInput/FormInput";
import Button from "@/components/molecules/Button/Button";

interface AuthFormProps {
  type: "login" | "register";
}

const AuthForm: FC<AuthFormProps> = ({ type }) => {
  const title = type === "login" ? "Login" : "Register";

  return (
    <form className="p-4 border border-white/15">
      <h1>{title}</h1>

      <FormInput placeholder="Enter email" Icon={AtSign} />
      <FormInput placeholder="Enter password" Icon={KeyRound} />

      <Button>{title}</Button>
    </form>
  );
};

export default AuthForm;
