import express from "express";
import { getImagePant, getImageTShirt } from "../controllers/product.js";

const router = express.Router()

router.get("/ao", getImageTShirt)
router.get("/quan", getImagePant)


export default router