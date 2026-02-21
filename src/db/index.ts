import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./tables.js";
import postgres from "postgres";

const client = postgres(process.env.POSTGRESQL_URL);
export const db = drizzle({ client, schema });
export * from "./tables.js";
