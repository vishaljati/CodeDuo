import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./db/index.js";


dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 3000;


connectDB()
  .then(() => {
    app.listen(PORT, (err) => {
      if (err) {
        console.error('Error starting server:', err);
      } else {
        console.log(`Server started at: http://localhost:${ PORT }`);
      }
    });
  })
  .catch((error) => {
    console.log('MongoDB Connection failed !!', error);
  });
