import { Sun, Users } from "lucide-react";
import Image from "next/image";
import css from "./Sidebar.module.scss";
import Link from "next/link";

export function Sidebar() {
  <aside className={css.sidebar}>
    <Image src="/icons/my-social.svg" alt="My Social" width={50} height={61} />

    <ul>
      <li>
        <Link href="/users">
          <Users />
        </Link>
      </li>
    </ul>

    <Sun />
  </aside>;
}
