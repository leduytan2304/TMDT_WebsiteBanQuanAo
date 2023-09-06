import express from "express";
import {addNewProduct} from "../controllers/admin.js";

const router = express.Router()

router.post("/addproduct/:userID", addNewProduct);

export default router