import { FC, PropsWithChildren } from "react";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="h-full flex justify-center items-center">
      <div className="w-full max-w-sm p-4">{children}</div>
    </main>
  );
};

export default AuthLayout;
