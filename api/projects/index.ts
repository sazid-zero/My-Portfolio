// api/projects/index.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { db } from '../../server/db'; 
import { projects, insertProjectSchema } from '../../shared/schema';
import { desc } from 'drizzle-orm';
import { z } from 'zod';

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

  // GET /api/projects - List all projects
  if (req.method === 'GET') {
    try {
      const allProjects = await db.select().from(projects).orderBy(desc(projects.createdAt));
      return res.status(200).json(allProjects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      return res.status(500).json({ error: "Failed to fetch projects" });
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
