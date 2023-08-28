import express from "express";
import { getUserInfo, getUserAddress, getOrderHistory } from "../controllers/user.js";
const router = express.Router()


router.get("/profile/:userID", getUserInfo);
router.get("/address/:userID", getUserAddress);
router.get("/order/:userID", getOrderHistory);



export default router