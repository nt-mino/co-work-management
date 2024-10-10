import { getUser } from "@/actions/dashboard/getUser";

export default async function Page() {
  const userData = await getUser();

  return (
    <div>
      <h1>kk</h1>
    </div>
  );
}
