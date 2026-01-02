import express, { Application, Request, Response } from "express";

const app: Application = express();

// Middlewares
app.use(express.json());

// Health check
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "API is running"
  });
});

export default app;