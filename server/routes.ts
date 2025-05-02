import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { ZodError, z } from "zod";

// Define a schema for the subscription request
const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for subscription
  app.post("/api/subscribe", (req: Request, res: Response) => {
    try {
      // Validate the request body
      const data = subscribeSchema.parse(req.body);
      
      // In a real implementation, we would store the email or send it to a service
      console.log("Subscription request received for:", data.email);
      
      // Return a success response
      res.json({ 
        success: true, 
        message: "Thank you for subscribing!" 
      });
    } catch (error) {
      // Handle validation errors
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid data provided",
          errors: error.errors 
        });
      }
      
      // Handle other errors
      console.error("Subscription error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Something went wrong. Please try again." 
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req: Request, res: Response) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);

  return httpServer;
}
