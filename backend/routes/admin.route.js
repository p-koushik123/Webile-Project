import express from "express";
import { loginAdmin, registerAdmin } from "../controllers/admin.controller.js";

const router = express.Router();

router.post("/adminSignup", registerAdmin);
router.post("/adminLogin", loginAdmin);

export default router;