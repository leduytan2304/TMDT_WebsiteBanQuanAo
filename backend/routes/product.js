import express from "express";
import { verifyJWT } from "../controllers/auth.js";
import { getImage,getImagePant, getImageTShirt, getProductsFilter, getImageSPM, getImageSS } from "../controllers/product.js";
const router = express.Router()

router.get("/ao", getImageTShirt)
router.get("/quan", getImagePant)
router.get("/do",getImage); 

router.get("/spm",getImageSPM); 
router.get("/ss",getImageSS); 


router.get("/search",getProductsFilter); 


export default router