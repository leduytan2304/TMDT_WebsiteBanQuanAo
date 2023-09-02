import express from "express";
import { verifyJWT } from "../controllers/auth.js";
<<<<<<< HEAD
import { getImage,getImagePant, getImageTShirt } from "../controllers/product.js";

=======
import { getImage,getImagePant, getImageTShirt, getProductsFilter } from "../controllers/product.js";
>>>>>>> 2621ca12f865ba1c710532608748cd78751d22c9
const router = express.Router()

router.get("/ao", getImageTShirt)
router.get("/quan", getImagePant)
router.get("/do",getImage); 


export default router