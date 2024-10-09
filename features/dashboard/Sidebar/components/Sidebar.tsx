"use client";

import { ChartLine, ChartPie, Pyramid, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const links = [
  { href: "/dashboard", text: "ダッシュボード", icon: ChartLine },
  { href: "/dashboard/plans", text: "プラン変更", icon: Pyramid },
  { href: "/dashboard/reservations", text: "会議室の予約", icon: ChartPie },
  { href: "/dashboard/accounts", text: "アカウント", icon: User },
];

export const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="w-[250px] h-screen px-4 py-16 border-gray-200 border-r-[1px]">
      <div className="w-full flex flex-col gap-2">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link key={`sidebar-${link.text}`} href={link.href}>
              <div
                className={`flex flex-row items-center gap-4 rounded-md py-3 px-4 transition-colors duration-300
                  ${
                    isActive
                      ? "bg-primary text-background"
                      : "hover:bg-primary hover:text-background"
                  }`}
              >
                <link.icon size={23} />
                <p className="text-[18px] font-bold">{link.text}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
