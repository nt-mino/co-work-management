import { db } from "@/db";
import { users } from "@/db/schema";

const seed = async () => {
  try {
    const usersData = await db
      .select({
        id: users.id,
      })
      .from(users);
    console.log(usersData);

    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seed();
