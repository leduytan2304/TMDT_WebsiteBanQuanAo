import express from "express";
import { getUserInfo, 
getUserAddress, 
getOrderHistory, 
editUserInfo, 
getRewardPoint,
editUerAddress } 
from "../controllers/user.js";
const router = express.Router()

router.get("/profile/:userID", getUserInfo);
router.put("/profile/edit", editUserInfo);
router.put("/address/edit", editUerAddress);
router.get("/address/:userID", getUserAddress);
router.get("/order/:userID", getOrderHistory);
router.get("/rewardpoint/:userID", getRewardPoint);



export default router