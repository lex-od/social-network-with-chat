import { MessageCircleMore, Settings, Sun, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import css from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className="py-5 flex flex-col justify-between items-center border-r border-r-white/15">
      <Image src="/icons/logo.svg" alt="Logo" width={32} height={32} priority />

      <ul className="space-y-12">
        <li>
          <Link className={css.iconButton} href="/users">
            <Users size={28} />
          </Link>
        </li>
        <li>
          <Link className={css.iconButton} href="/">
            <MessageCircleMore size={28} />
          </Link>
        </li>
        <li>
          <Link className={css.iconButton} href="/settings">
            <Settings size={28} />
          </Link>
        </li>
      </ul>

      <button className={css.iconButton}>
        <Sun size={28} />
      </button>
    </aside>
  );
};

export default Sidebar;
