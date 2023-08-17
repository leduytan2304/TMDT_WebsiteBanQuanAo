import express from "express";
import { login,register,logout,testing,testing2 } from "../controllers/auth.js";

const router = express.Router()

router.post("/login", login)
router.post("/register", register)
router.post("/logout", logout)
router.post("/testing/:userID", testing)
router.get("/testing/:userID", testing2)


export default router