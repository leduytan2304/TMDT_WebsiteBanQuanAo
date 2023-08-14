import express from "express";
import { getImage,getImagePant, getImageTShirt, } from "../controllers/product.js";

const router = express.Router()

router.get("/ao", getImageTShirt)
router.get("/chi-tiet-ao/:id",getDetailTShirt);
router.get("/quan", getImagePant)
router.get("/do",getImage)



export default router