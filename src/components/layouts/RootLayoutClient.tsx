import { FC, PropsWithChildren } from "react";
import css from "./RootLayoutClient.module.scss";
import Sidebar from "./sidebar/Sidebar";

const RootLayoutClient: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={css.layout}>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default RootLayoutClient;
