"use server";

import { db } from "@/db";
import { meetingRooms } from "@/db/schema";
import { unstable_cache } from "next/cache";

export const getMeetingRooms = async () => {
  const meetingRoomsData = await unstable_cache(
    async () => {
      return await db.select().from(meetingRooms);
    },
    ["meetingRooms"],
    {
      tags: ["meetingRooms"],
    }
  )();

  return meetingRoomsData;
};
