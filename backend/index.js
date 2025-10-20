import express from "express";

const app = express();
const PORT = process.env.PORT || 2000;
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "HELLO API" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/:name", (req, res) => {
  const { name } = req.params;
  try {
    res.status(200).json({ message: `Helloo,${name}` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/post", (req, res) => {
  try {
    const data = req.body;
    console.log("recieived,", data);
    res.status(201).json({ message: "data created ", item: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

let users = [
  { id: 1, name: "Ali", age: 25 },
  { id: 2, name: "Sara", age: 22 },
  { id: 3, name: "saleh", age: 22 },
  { id: 4, name: "ali", age: 22 },

];

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
  const userIndex = users.findIndex(u=> u.id === parseInt(req.params.id));
  console.log(userIndex,"userIndex")
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
