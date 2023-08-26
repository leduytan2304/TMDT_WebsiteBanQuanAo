import express from "express";
import { verifyJWT } from "../controllers/auth.js";
import { getImage,getImagePant, getImageTShirt } from "../controllers/product.js";

const router = express.Router()

router.get("/ao", getImageTShirt)
router.get("/quan", getImagePant)
router.get("/do",getImage); 





export default router