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
      message:"user updated!",
      data:users[userIndex]
    })
  } catch (error) {}
});

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
console.log("hello.....");

// Add GET, POST, PUT, and DELETE routes for products.
