import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import { CreateUserSchema, CreateRoomSchema } from "@repo/common/types";




const app = express();
app.use(express.json());

app.post("/signup", (req, res) => {

  const data = CreateUserSchema.safeParse(req.body);
  if (!data.success) {
    return res.json({
      message: "Incorrect input"
    });
  }
  


  res.json({
    userId: "123"
  });
});

app.post("/signin", (req, res) => {
  const userId = 1;
  const token = jwt.sign(
    { userId },
    JWT_SECRET
  );
  res.json({ token });
});

app.post("/room", middleware, (req, res) => {
  const data = CreateRoomSchema.safeParse(req.body);

  if (!data.success) {
    return res.status(400).json({
      message: "Invalid room input"
    });
  }

  res.json({
    message: "Room created successfully"
  });
});

app.listen(3001, () => console.log("HTTP Backend running on 3001"));

