import { FC, PropsWithChildren } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";

const RootLayoutClient: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-full grid grid-cols-[70px_1fr] grid-rows-[auto_1fr]">
      <Sidebar />
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default RootLayoutClient;
