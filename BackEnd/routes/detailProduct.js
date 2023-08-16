import express from "express";
import { getDetail } from "../controllers/product.js";

const router = express.Router()


router.get("/:productID",getDetail)




export default router