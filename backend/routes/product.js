import express from "express";
import { verifyJWT } from "../controllers/auth.js";
import { getImage,getImagePant, getImageTShirt, getProductsFilter } from "../controllers/product.js";
const router = express.Router()

router.get("/ao", getImageTShirt)
router.get("/quan", getImagePant)
router.get("/do",getImage); 
router.get("/search",getProductsFilter); 


export default router