"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import { updateUserNameSchema } from "@/features/dashboard/accounts/DisplayName/schema";
import { authActionClient } from "@/lib/safe-action";
import { eq } from "drizzle-orm";
import { revalidateTag } from "next/cache";

export const updateUserNameAction = authActionClient
  .schema(updateUserNameSchema)
  .action(async ({ parsedInput, ctx }) => {
    const { userName } = parsedInput;
    const { user } = ctx;

    await db
      .update(users)
      .set({
        name: userName,
      })
      .where(eq(users.id, user.id));

    revalidateTag(`user_${user.id}`);

    return user;
  });
