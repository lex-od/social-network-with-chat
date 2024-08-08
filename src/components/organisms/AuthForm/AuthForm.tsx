"use client";
import { FC } from "react";

interface AuthFormProps {
  type: "login" | "register";
}

const AuthForm: FC<AuthFormProps> = ({ type }) => {
  return <div>AuthForm</div>;
};

export default AuthForm;
