import type { VercelRequest, VercelResponse } from '@vercel/node';
import { db } from '../_db';
import { projects, insertProjectSchema } from '../_schema';
import { eq } from 'drizzle-orm';
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

  const { id } = req.query;
  if (!id || Array.isArray(id)) {
    return res.status(400).json({ error: "Missing or invalid ID" });
  }
  const projectId = parseInt(id as string);

  // GET /api/projects/:id - Get project by ID
  if (req.method === 'GET') {
    try {
      const project = await db.select().from(projects).where(eq(projects.id, projectId));
      if (project.length === 0) {
        return res.status(404).json({ error: "Project not found" });
      }
      return res.status(200).json(project[0]);
    } catch (error) {
      console.error("Error fetching project by ID:", error);
      return res.status(500).json({ error: "Failed to fetch project" });
    }
  }

  // PUT /api/projects/:id - Update project
  if (req.method === 'PUT') {
    const authHeader = req.headers.authorization;
    if (authHeader !== `Bearer ${process.env.VITE_ADMIN_PASSWORD}`) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const validatedData = insertProjectSchema.partial().parse(req.body);
      const updatedProject = await db.update(projects)
        .set(validatedData)
        .where(eq(projects.id, projectId))
        .returning();
      
      if (updatedProject.length === 0) return res.status(404).json({ error: "Project not found" });
      return res.status(200).json(updatedProject[0]);
    } catch (error) {
       if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid data", details: error.errors });
      }
      console.error("Error updating project:", error);
      return res.status(500).json({ error: "Failed to update project" });
    }
  }

  // DELETE /api/projects/:id - Delete project
  if (req.method === 'DELETE') {
    const authHeader = req.headers.authorization;
    if (authHeader !== `Bearer ${process.env.VITE_ADMIN_PASSWORD}`) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      await db.delete(projects).where(eq(projects.id, projectId));
      return res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
      console.error("Error deleting project:", error);
      return res.status(500).json({ error: "Failed to delete project" });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
