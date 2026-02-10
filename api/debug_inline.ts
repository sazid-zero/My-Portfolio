import type { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { pgTable, text, serial, boolean, timestamp } from "drizzle-orm/pg-core";
import { desc } from 'drizzle-orm';

// --- INLINED SCHEMA ---
const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  technologies: text("technologies").array().notNull(), 
  liveUrl: text("live_url").notNull(),
  githubUrl: text("github_url").notNull(),
  category: text("category", { enum: ['Frontend', 'Fullstack', 'Mobile Apps', 'Games'] }).notNull(),
  featured: boolean("featured").default(false).notNull(),
  content: text("content"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
// ----------------------

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error("DATABASE_URL missing");

    const sql = neon(url);
    const db = drizzle(sql);

    const result = await db.select().from(projects).limit(2);

    return res.status(200).json({
      status: 'success',
      type: 'inline',
      count: result.length,
      data: result
    });

  } catch (error) {
    return res.status(500).json({
      status: 'error',
      type: 'inline',
      error: String(error)
    });
  }
}
