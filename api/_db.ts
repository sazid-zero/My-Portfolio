import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from "./_schema";

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is missing in _db.ts");
}

let dbInstance;
try {
  const sql = neon(process.env.DATABASE_URL!);
  dbInstance = drizzle(sql, { schema });
  console.log("DB Initialized successfully in _db.ts");
} catch (error) {
  console.error("Failed to initialize DB in _db.ts:", error);
  // process.exit(1); // Don't exit, let it fail during query if needed
}

export const db = dbInstance!;
