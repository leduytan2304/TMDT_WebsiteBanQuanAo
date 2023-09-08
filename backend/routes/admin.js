import express from "express";
import {addNewProduct, getOrderConfirm, getOrderDGoi, getOrderDGiao, getOrderHT, viewOrderDetail, getListUser} from "../controllers/admin.js";

const router = express.Router()

router.post("/addproduct", addNewProduct);
router.get("/orderconfirm", getOrderConfirm);
router.get("/orderdgoi", getOrderDGoi);
router.get("/orderdgiao", getOrderDGiao);
router.get("/orderht", getOrderHT);
router.get("/orderdetail/:orderid", viewOrderDetail);
router.get("/listuser", getListUser);

export default router