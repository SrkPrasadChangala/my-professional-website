import type { Express } from "express";
import { createServer, type Server } from "http";

export function registerRoutes(app: Express): Server {
  // Basic route for contact form that doesn't use database
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;
    
    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
    
    if (!email.includes('@')) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // In a real application, you might want to send this data via email
    // or store it in a file. For now, we'll just acknowledge receipt.
    res.json({ 
      success: true,
      message: "Thank you for your message. We'll get back to you soon!"
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
