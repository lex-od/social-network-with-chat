import { FC, PropsWithChildren } from "react";
import Sidebar from "@/layouts/MainLayout/Sidebar/Sidebar";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-full grid grid-cols-[80px_1fr]">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
