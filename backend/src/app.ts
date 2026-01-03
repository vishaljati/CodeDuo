import express, { Application, Request, Response } from "express";

const app: Application = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "API is running"
  });
});

//import routes
import waitlistRoutes from "./routes/waitlist.routes.js";

//use routes
app.use("/api/v1/waitlist", waitlistRoutes); // POST  /api/v1/waitlist/


export default app;