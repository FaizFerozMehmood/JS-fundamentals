
import express from "express"
import { addProduct, getProducts,deleteProduct } from "../controllers/productController.js";

const router = express.Router()

router.post("/add",addProduct)
router.get("/get",getProducts)
router.delete("/delete/:id",deleteProduct)

export default router;