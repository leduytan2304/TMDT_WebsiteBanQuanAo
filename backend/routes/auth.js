import express from "express";
import { login,register,logout,testing,cartDetail } from "../controllers/auth.js";

const router = express.Router()

router.post("/login", login)
router.post("/register", register)
router.post("/logout", logout)
router.post("/testing/:userID", testing)
router.get("/cart/:userID", cartDetail)



export default router