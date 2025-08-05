import express from "express";
import { client } from "@repo/db/client";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json("hello there man ");
});

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
});

app.listen(3000);
