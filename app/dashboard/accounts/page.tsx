import { getUser } from "@/actions/dashboard/getUser";
import DeleteAccount from "@/features/dashboard/accounts/DeleteAccount/components/DeleteAccount";
import DisplayName from "@/features/dashboard/accounts/DisplayName/components/DisplayName";

export default async function Page() {
  const userData = await getUser();

  return (
    <div className="flex flex-col gap-12">
      <DisplayName userName={userData.name} />
      <DeleteAccount />
    </div>
  );
}
