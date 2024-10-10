import { db } from "@/db";
import { plans, userVisits, users } from "@/db/schema";
import { getUserId } from "@/utils/test-user";
import { faker } from "@faker-js/faker";
import { eq } from "drizzle-orm";

const seedVisits = async () => {
  try {
    const userId = getUserId();
    const [userData] = await db
      .select({
        id: users.id,
        name: users.name,
        email: users.email,
        role: users.role,
        plan: plans.id,
      })
      .from(users)
      .where(eq(users.id, userId))
      .leftJoin(plans, eq(users.plan_id, plans.id));

    const startDate = new Date("2024-07-01T00:00:00Z");
    const endDate = new Date("2024-09-30T23:59:59Z");
    const visitDates = new Set<string>();

    while (visitDates.size < 20) {
      const randomDate = faker.date.between({ from: startDate, to: endDate });
      visitDates.add(randomDate.toISOString());
    }

    const sortedDates = Array.from(visitDates).sort(
      (a, b) => new Date(b).getTime() - new Date(a).getTime()
    );

    for (const dateString of sortedDates) {
      await db.insert(userVisits).values([
        {
          visited_at: new Date(dateString),
          user_id: userId,
          user_plan_id: userData.plan,
        },
      ]);
    }

    console.log("Seeding visits...");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedVisits();
