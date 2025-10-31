import express from "express";
import dotenv from "dotenv";
import { connectDataBase } from "./config/connect.js";
import productRoutes from "./routes/productRoute.js";
import path from "path";
import { fileURLToPath } from "url";

import cors from "cors";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 2000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.json());
// app.use(express.urlencoded({ extended: true }))
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
connectDataBase();

app.use("/product", productRoutes);

app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "HELLO API" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
let users = [
  { id: 1, name: "Ali", age: 25 },
  { id: 2, name: "Sara", age: 22 },
  { id: 3, name: "saleh", age: 22 },
  { id: 4, name: "ali", age: 22 },
];

app.get("/:name", (req, res) => {
  const { name } = req.params;
  try {
    res.status(200).json({ message: `Helloo,${name}` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
const validateUser = (req, res, next) => {
  if (!req.body.name || !req.body.age) {
    return res.status(400).json({
      message: "all fields are required!!",
    });
  }
  next();
};
app.post("/post", validateUser, (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age,
  };
  users.push(user);
  res.status(201).json({
    message: "user created",
    data: user,
  });
});
// app.post("/post", (req, res) => {
//   try {
//     const data = req.body;
//     console.log("recieived,", data);
//     res.status(201).json({ message: "data created ", item: data });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: error.message });
//   }
// });
// ...
app.put("/user/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const updatedUser = req.body;
    const userIndex = users.findIndex((u) => u.id === id);
    if (!userIndex === -1) {
      return res.status(500).json({ message: "user not found!!" });
    }
    users[userIndex] = { id, ...updatedUser };
    return res.status(200).json({
      message: "user updated!",
      data: users[userIndex],
    });
  } catch (error) {}
});

app.delete("/user/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  console.log(userIndex, "userIndex");
  if (userIndex === -1)
    return res.status(404).json({
      message: "user not found!",
    });
  const deletedUser = users.splice(userIndex, 1);
  res.status(201).json({
    message: "user deleted",
    deletedUser,
  });
});
app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
console.log("hello.....");

// Add GET, POST, PUT, and DELETE routes for products.
