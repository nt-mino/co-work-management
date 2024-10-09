"use server";

import { db } from "@/db";
import { notifications } from "@/db/schema";
import { desc } from "drizzle-orm";
import { unstable_cache } from "next/cache";

export const getNotifications = async () => {
  const notificationsData = await unstable_cache(
    async () => {
      return await db
        .select()
        .from(notifications)
        .orderBy(desc(notifications.created_at));
    },
    ["notifications"],
    {
      tags: ["notifications"],
    }
  )();

  if (!notificationsData) {
    throw new Error("Notifications not found");
  }

  return notificationsData;
};
