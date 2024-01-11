//app js me import krlo

import express from "express";
const app = express();
import cors from "cors";
import dotenv from "dotenv";

import path from "path";

//after that using cors error
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["POST", "GET", "DELETE", "PUT"],
  })
);
// after that all middlewares
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("<h1> server is succesfully running </h1>");
});

if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({
    path: "./config/.env",
  });
}

//imported all routes
import userRouter from "./routes/userRoutes.js";
//use all routes
app.use("/api/v1", userRouter);

// use error handlers

export default app;
