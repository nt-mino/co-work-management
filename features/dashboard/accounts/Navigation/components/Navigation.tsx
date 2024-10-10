"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const navigations = [
  { href: "/dashboard/accounts", name: "アカウント設定" },
  { href: "/dashboard/accounts/billing", name: "お支払い情報" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="mb-8">
      <div className="flex flex-row items-center gap-4">
        {navigations.map((nav) => {
          const isActive = pathname === nav.href;
          return (
            <Link
              key={`nav-${nav.name}`}
              href={`${nav.href}`}
              className={`text-[15px] ${
                isActive
                  ? "font-bold"
                  : "font-bold text-gray-400 hover:text-black"
              }`}
            >
              {nav.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
