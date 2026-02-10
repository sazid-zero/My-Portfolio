import type { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { pgTable, text, serial, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { desc } from 'drizzle-orm';
import { z } from 'zod';

// --- INLINED SCHEMA & DB SETUP ---
// Inlined to avoid Vercel module resolution issues with shared files
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

const insertProjectSchema = createInsertSchema(projects).pick({
  title: true,
  description: true,
  content: true,
  image: true,
  technologies: true,
  liveUrl: true,
  githubUrl: true,
  category: true,
  featured: true,
});
// --------------------------------

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Initialize DB connection per request to ensure reliability in serverless
  if (!process.env.DATABASE_URL) {
    return res.status(500).json({ error: "DATABASE_URL configuration missing" });
  }
  const sql = neon(process.env.DATABASE_URL);
  const db = drizzle(sql);

  // GET /api/projects - List all projects
  if (req.method === 'GET') {
    try {
      const allProjects = await db.select().from(projects).orderBy(desc(projects.createdAt));
      return res.status(200).json(allProjects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      return res.status(500).json({ 
        error: "Failed to fetch projects", 
        details: String(error)
      });
    }
  }

  // POST /api/projects - Create new project
  if (req.method === 'POST') {
    const authHeader = req.headers.authorization;
    if (authHeader !== `Bearer ${process.env.VITE_ADMIN_PASSWORD}`) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const validatedData = insertProjectSchema.parse(req.body);
      const newProject = await db.insert(projects).values(validatedData).returning();
      return res.status(200).json(newProject[0]);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid data", details: error.errors });
      }
      console.error("Error creating project:", error);
      return res.status(500).json({ error: "Failed to create project" });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
