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
app.get("/:name",(req,res)=>{
    const {name} = req.params
    try {
        res.status(200).json({message: `Helloo,${name}`})
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
})
app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
console.log("hello.....");
