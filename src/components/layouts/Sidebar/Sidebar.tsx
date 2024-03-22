"use client";
import { Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import css from "./Sidebar.module.scss";
import { NAV_LIST } from "./Sidebar.data";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="row-start-1 row-span-2 py-5 flex flex-col justify-between items-center border-r border-r-white/15">
      <Image src="/icons/logo.svg" alt="Logo" width={32} height={32} priority />

      <nav>
        <ul className="space-y-12">
          {NAV_LIST.map((navItem) => (
            <li key={navItem.url}>
              <Link
                className={clsx(css.iconButton, {
                  current: navItem.url === pathname,
                })}
                href={navItem.url}
                title={navItem.title}
              >
                <navItem.Icon size={28} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button className={css.iconButton}>
        <Sun size={28} />
      </button>
    </aside>
  );
};

export default Sidebar;
