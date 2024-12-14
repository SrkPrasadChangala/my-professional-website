import type { Express } from "express";
import { createServer, type Server } from "http";
import { db } from "../db";
import { contacts } from "@db/schema";
import { z } from "zod";

export function registerRoutes(app: Express): Server {
  app.post("/api/contact", async (req, res) => {
    const schema = z.object({
      name: z.string().min(1),
      email: z.string().email(),
      message: z.string().min(1)
    });

    try {
      const data = schema.parse(req.body);
      await db.insert(contacts).values(data);
      res.json({ success: true });
    } catch (error) {
      res.status(400).json({ error: "Invalid input" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
