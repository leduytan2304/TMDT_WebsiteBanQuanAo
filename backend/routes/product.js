import express from "express";
import { getImage,getImagePant, getImageTShirt,getDetail } from "../controllers/product.js";

const router = express.Router()

router.get("/ao", getImageTShirt)
router.get("/quan", getImagePant)
router.get("/do",getImage);



export default router