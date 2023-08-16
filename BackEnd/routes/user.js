import express from "express";
import { getUserInfo } from "../controllers/user.js";

const router = express.Router()


router.get("/:userID",getUserInfo)




export default router