import app from "./app.js";
import { connectDB } from "./config/conn.js";
import dotenv from "dotenv";
import path from "path";

if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({
    path: "./config/.env",
  });
}
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`succesfully running the port number is ${process.env.PORT}`);
});
