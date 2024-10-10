import { getMeetingRooms } from "@/actions/dashboard/reservations/getMeetingRooms";

export default async function Page() {
  const meetingRooms = await getMeetingRooms();
  console.log(meetingRooms);
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
