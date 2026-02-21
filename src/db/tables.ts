import { pgTable, integer, varchar, timestamp } from "drizzle-orm/pg-core";

export const financeTable = pgTable("finance", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  description: varchar({ length: 255 }).notNull(),
  sum: integer().notNull(),
  from: integer().notNull(),
  updated_at: timestamp()
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
  created_at: timestamp().defaultNow().notNull(),
});
