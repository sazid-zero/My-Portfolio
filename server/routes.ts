import type { Express } from "express";
import { createServer, type Server } from "http";
import { db } from "./db";
import { insertContactMessageSchema, insertProjectSchema, projects, contactMessages } from "@shared/schema";
import { z } from "zod";
import { eq, desc } from "drizzle-orm";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await db.insert(contactMessages).values(validatedData).returning();
      
      // In a real application, you would send an email notification here
      console.log("New contact message received:", message);
      
      res.json({ 
        success: true, 
        message: "Message sent successfully!" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Error creating contact message:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again." 
        });
      }
    }
  });

  // Get all projects
  app.get("/api/projects", async (req, res) => {
    try {
      const allProjects = await db.select().from(projects).orderBy(desc(projects.createdAt));
      res.json(allProjects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });

  // Get project by ID
  app.get("/api/projects/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });
      
      const project = await db.select().from(projects).where(eq(projects.id, id)).limit(1);
      if (project.length === 0) return res.status(404).json({ message: "Project not found" });
      
      res.json(project[0]);
    } catch (error) {
      console.error("Error fetching project:", error);
      res.status(500).json({ message: "Failed to fetch project" });
    }
  });

  // Create new project
  app.post("/api/projects", async (req, res) => {
    // Simple admin check
    const authHeader = req.headers.authorization;
    if (authHeader !== `Bearer ${process.env.VITE_ADMIN_PASSWORD}`) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      const validatedData = insertProjectSchema.parse(req.body);
      const newProject = await db.insert(projects).values(validatedData).returning();
      res.json(newProject[0]);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid data", errors: error.errors });
      } else {
        console.error("Error creating project:", error);
        res.status(500).json({ message: "Failed to create project" });
      }
    }
  });

  // Update project
  app.put("/api/projects/:id", async (req, res) => {
    const authHeader = req.headers.authorization;
    if (authHeader !== `Bearer ${process.env.VITE_ADMIN_PASSWORD}`) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

      const validatedData = insertProjectSchema.partial().parse(req.body);
      const updatedProject = await db.update(projects)
        .set(validatedData)
        .where(eq(projects.id, id))
        .returning();
      
      if (updatedProject.length === 0) return res.status(404).json({ message: "Project not found" });
      res.json(updatedProject[0]);
    } catch (error) {
      console.error("Error updating project:", error);
      res.status(500).json({ message: "Failed to update project" });
    }
  });

  // Delete project
  app.delete("/api/projects/:id", async (req, res) => {
    const authHeader = req.headers.authorization;
    if (authHeader !== `Bearer ${process.env.VITE_ADMIN_PASSWORD}`) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

      await db.delete(projects).where(eq(projects.id, id));
      res.json({ message: "Project deleted successfully" });
    } catch (error) {
      console.error("Error deleting project:", error);
      res.status(500).json({ message: "Failed to delete project" });
    }
  });

  // Admin Login Check
  app.post("/api/auth/login", (req, res) => {
    const { password } = req.body;
    if (password === process.env.VITE_ADMIN_PASSWORD) {
      res.json({ success: true, token: process.env.VITE_ADMIN_PASSWORD });
    } else {
      res.status(401).json({ success: false, message: "Invalid password" });
    }
  });


  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      // For contact messages, we can still use storage or switch to DB. 
      // Let's stick to storage for now or switch to DB if preferred.
      // Switching to DB since we have it.
      const message = await db.insert(contactMessages).values(validatedData).returning();
      
      console.log("New contact message received:", message[0]);
      
      res.json({ 
        success: true, 
        message: "Message sent successfully!" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Error creating contact message:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again." 
        });
      }
    }
  });

  // Get all contact messages
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await db.select().from(contactMessages).orderBy(desc(contactMessages.createdAt));
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch messages" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
