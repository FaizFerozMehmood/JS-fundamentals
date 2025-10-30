import express from "express";
import {
  addProduct,
  getProducts,
  deleteProduct,
  updateProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multerConfig.js";

const router = express.Router();
router.post("/add", upload.single("image"), addProduct);

// router.post("/add", addProduct);
router.get("/get", getProducts);
router.delete("/delete/:id", deleteProduct);
router.put("/update/:id", updateProduct);

export default router;
