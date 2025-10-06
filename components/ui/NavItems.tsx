"use client";

import { NAV_ITEMS } from "@/lib/constants";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavItems = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (pathname === "/") return pathname === "/";

    return pathname.startsWith(path);
  };

  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
      {NAV_ITEMS.map(({ href, title }) => (
        <li
          className={`hover:text-yellow-500 transition-colors ${
            isActive(href) ? "text-gray-100" : ""
          }`}
          key={href}
        >
          <Link href={href}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};
