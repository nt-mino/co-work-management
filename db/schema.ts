import { relations } from "drizzle-orm";
import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const userRoleEnum = pgEnum("role", ["admin", "user"]);

export const users = pgTable("users", {
  id: uuid().primaryKey(),
  name: text().notNull(),
  email: text().notNull().unique(),
  role: userRoleEnum().notNull().default("user"),
  avator_url: text(),

  plan_id: uuid()
    .notNull()
    .references(() => plan.id),

  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});
export const usersRelations = relations(users, ({ one, many }) => ({
  plan: one(plan, {
    fields: [users.plan_id],
    references: [plan.id],
  }),
  tickets: many(userTickets),
  visits: many(userVisits),
}));

export const userTickets = pgTable("user_tickets", {
  id: uuid().primaryKey(),
  usage_count: integer().notNull().default(0),
  expired_at: timestamp().notNull(),

  user_id: uuid()
    .notNull()
    .references(() => users.id),
  ticket_id: uuid()
    .notNull()
    .references(() => tickts.id),

  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});
export const userTicketsRelations = relations(userTickets, ({ one }) => ({
  user: one(users, {
    fields: [userTickets.user_id],
    references: [users.id],
  }),
  ticket: one(tickts, {
    fields: [userTickets.ticket_id],
    references: [tickts.id],
  }),
}));

export const plan = pgTable("plan", {
  id: uuid().primaryKey(),
  name: text().notNull(),
});

export const tickts = pgTable("tickts", {
  id: uuid().primaryKey(),
  name: text().notNull(),
  usage_limit: integer().notNull().default(0),
  usage_period: integer().notNull().default(0),
});

export const userVisits = pgTable("user_visits", {
  id: serial().primaryKey(),
  visited_at: timestamp().notNull().defaultNow(),

  user_id: uuid()
    .notNull()
    .references(() => users.id),
  user_plan_id: uuid()
    .notNull()
    .references(() => plan.id),
});
export const userVisitsRelations = relations(userVisits, ({ one }) => ({
  user: one(users, {
    fields: [userVisits.user_id],
    references: [users.id],
  }),
  userPlan: one(plan, {
    fields: [userVisits.user_plan_id],
    references: [plan.id],
  }),
}));

export const meetingRoomsReservations = pgTable("meeting_rooms_reservations", {
  id: uuid().primaryKey(),
  attendee_count: integer().notNull(),
  start_at: timestamp().notNull(),
  end_at: timestamp().notNull(),
  memo: text().notNull(),

  user_id: uuid()
    .notNull()
    .references(() => users.id),

  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});
export const meetingRoomsReservationsRelations = relations(
  meetingRoomsReservations,
  ({ one }) => ({
    user: one(users, {
      fields: [meetingRoomsReservations.user_id],
      references: [users.id],
    }),
  })
);

export const meetingRooms = pgTable("meeting_rooms", {
  id: uuid().primaryKey(),
  name: text().notNull(),
});

export const notifications = pgTable("notifications", {
  id: uuid().primaryKey(),
  title: text().notNull(),
  content: text().notNull(),

  category_id: uuid()
    .notNull()
    .references(() => notificationCategories.id),

  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});
export const notificationsRelations = relations(notifications, ({ one }) => ({
  category: one(notificationCategories, {
    fields: [notifications.category_id],
    references: [notificationCategories.id],
  }),
}));

export const notificationCategories = pgTable("notification_categories", {
  id: uuid().primaryKey(),
  name: text().notNull(),
});
