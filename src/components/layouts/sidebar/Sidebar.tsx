import { MessageCircleMore, Settings, Sun, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import css from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={css.sidebar}>
      <Image src="/icons/logo.svg" alt="Logo" width={50} height={50} />

      <ul>
        <li>
          <Link href="/users">
            <Users />
          </Link>
        </li>
        <li>
          <Link href="/chats">
            <MessageCircleMore />
          </Link>
        </li>
        <li>
          <Link href="/settings">
            <Settings />
          </Link>
        </li>
      </ul>

      <Sun />
    </aside>
  );
};

export default Sidebar;
