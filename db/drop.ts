import { db } from ".";
import { meetingRooms, notificationCategories, plan, tickts } from "./schema";

const drop = async () => {
  try {
    await db.transaction(async (tx) => {
      await tx.delete(plan);
      await tx.delete(tickts);
      await tx.delete(meetingRooms);
      await tx.delete(notificationCategories);
    });
    console.log("dropped successfully");
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

drop();
