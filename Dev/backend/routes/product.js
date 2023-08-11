import express from "express";
import { getImage } from "../controllers/product.js";

const router = express.Router()

router.get("/", getImage)


export default router