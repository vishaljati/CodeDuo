import express, { Application, Request, Response } from "express";
import cors from "cors";


const app: Application = express();

app.use(
  cors({
    origin: process.env.REACT_CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.options("*", cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

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