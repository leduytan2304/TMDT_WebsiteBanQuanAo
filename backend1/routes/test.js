import express from "express";
import multer from "multer";
import { postImage } from "../controllers/test.js";
const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router()

router.post("/upload", upload.single('image'), postImage)

export default router