import { FC, PropsWithChildren } from "react";
import Sidebar from "./Sidebar/Sidebar";

const RootLayoutClient: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-full grid grid-cols-[80px_1fr]">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default RootLayoutClient;
