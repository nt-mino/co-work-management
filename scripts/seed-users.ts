import { db } from "@/db";
import { plans, users } from "@/db/schema";
import { eq } from "drizzle-orm";

const seedUser = async () => {
  try {
    const usersData = [
      {
        name: "Minoru Noto",
        email: "m.noto@funda.jp",
        role: "admin",
        plan: "standard",
      },
    ];

    for (const userData of usersData) {
      const [targetPlan] = await db
        .select()
        .from(plans)
        .where(eq(plans.name, userData.plan));
      if (!targetPlan) {
        throw new Error("Plan not found");
      }

      await db.insert(users).values([
        {
          name: userData.name,
          email: userData.email,
          role: userData.role,
          plan_id: targetPlan.id,
        },
      ]);
    }

    console.log("Users seeded successfully");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedUser();
