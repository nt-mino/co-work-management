import Header from "@/features/dashboard/Header/components/Header";
import { Sidebar } from "@/features/dashboard/Sidebar/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-row">
      <Sidebar />
      <div className="grow flex flex-col">
        <Header />
        <div className="w-full px-8">{children}</div>
      </div>
    </div>
  );
}
