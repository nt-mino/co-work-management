import { getUser } from "@/actions/dashboard/getUser";
import WelcomeCard from "@/features/dashboard/WelcomCard/components/WelcomCard";

export default async function Page() {
  const userData = await getUser();
  console.log(userData);
  return (
    <div className="w-full h-[64px]">
      <div className="flex flex-row">
        <WelcomeCard />
      </div>
    </div>
  );
}
