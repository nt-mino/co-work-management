import Navigation from "@/features/dashboard/accounts/Navigation/components/Navigation";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-[960px] w-full mx-auto">
      <h3 className="text-[24px] font-bold mb-6">アカウント設定</h3>
      <Navigation />
      <div className="w-full">{children}</div>
    </div>
  );
}
