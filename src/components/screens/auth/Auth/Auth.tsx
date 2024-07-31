"use client";
import { FC } from "react";

interface IAuth {
  type: "login" | "register";
}

const Auth: FC<IAuth> = ({ type }) => {
  return <div>Auth</div>;
};

export default Auth;
