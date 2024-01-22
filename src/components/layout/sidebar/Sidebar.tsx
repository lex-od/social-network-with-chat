import { MessageCircleMore, Settings, Sun, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import css from "./Sidebar.module.scss";

export function Sidebar() {
  <aside className={css.sidebar}>
    <Image src="/icons/my-social.svg" alt="My Social" width={50} height={61} />

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
  </aside>;
}
