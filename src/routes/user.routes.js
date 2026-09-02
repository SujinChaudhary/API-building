import express from "express";
import userControllers from "../controllers/user.controllers.js";

const router = express.Router();

router.get("/", userControllers.getUsers);

router.get("/:userId", userControllers.getUserById);

router.post("/",userControllers.createUser);

router.delete("/:userId", userControllers.deleteUser);

export default router;
