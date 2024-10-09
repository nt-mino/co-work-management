"use server";

import { db } from "@/db";
import { plans, users } from "@/db/schema";
import { getUserId } from "@/utils/test-user";
import { eq } from "drizzle-orm";
import { unstable_cache } from "next/cache";

export const getUserData = async () => {
  const userId = getUserId();

  const [userData] = await unstable_cache(
    async () => {
      return await db
        .select({
          id: users.id,
          name: users.name,
          email: users.email,
          role: users.role,
          plan: plans.name,
        })
        .from(users)
        .where(eq(users.id, userId))
        .leftJoin(plans, eq(users.plan_id, plans.id));
    },
    ["user", userId],
    {
      tags: [`user_${userId}`],
    }
  )();

  if (!userData) {
    throw new Error("User not found");
  }

  return userData;
};
