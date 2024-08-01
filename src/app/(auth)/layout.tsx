import { FC, PropsWithChildren } from "react";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return <main className="h-full">{children}</main>;
};

export default AuthLayout;
