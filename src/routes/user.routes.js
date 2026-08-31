import express from "express";
import userControllers from "../controllers/user.controllers.js";

const router = express.Router();

router.get("/users", userControllers.getUsers);

router.get("/users/:id", userControllers.getUserById);

export default router;
