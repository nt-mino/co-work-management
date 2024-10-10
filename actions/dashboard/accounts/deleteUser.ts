"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { getUser } from "../getUser";

export const deleteUserAction = async () => {
  const user = await getUser();

  await db.delete(users).where(eq(users.id, user.id));

  redirect("/");
};
