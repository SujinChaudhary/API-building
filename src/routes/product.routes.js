import express from "express";
import productControllers from "../controllers/product.controllers.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.post("/", auth, productControllers.createProduct);

export default router;
