import { getNotifications } from "@/actions/dashboard/getNotifications";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";

export default async function HeaderNotification() {
  const notifications = await getNotifications();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <div className="border-[2px] border-gray-400 rounded-[50%] p-2">
          <Bell className="text-gray-600" size={24} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 mr-12">
        <DropdownMenuLabel>お知らせ</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.map((notification) => {
          return (
            <DropdownMenuItem
              key={notification.id}
              className="py-4 cursor-pointer"
            >
              {notification.title}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
