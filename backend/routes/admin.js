import express from "express";
import {addNewProduct} from "../controllers/admin.js";

const router = express.Router()

router.post("/addproduct", addNewProduct);

export default router