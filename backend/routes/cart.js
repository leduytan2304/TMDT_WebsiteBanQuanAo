import express from "express";
import { getTotalPriceShopingCart,addProductToCart,removeProductFromCart, deleteProductFromCart,completedPayment,createOrder,getUserAddress, refundMoney} from "../controllers/cart.js";
// import { getUserAddress } from "../controllers/user.js";
const router = express.Router()


router.get("/:userID", getTotalPriceShopingCart); // đẩy số tiền cần thanh toán lên api
router.post("/addProduct/:userID",addProductToCart)//thêm sản phẩm vào giỏ hàng bên trong giỏ hàng
router.put("/removeProduct/:userID",removeProductFromCart)//thêm sản phẩm vào giỏ hàng bên trong giỏ hàng
router.put("/deleteProduct/:userID",deleteProductFromCart)//thêm sản phẩm vào giỏ hàng bên trong giỏ hàng
router.get("/userAdress/:userID",getUserAddress)//thêm sản phẩm vào giỏ hàng bên trong giỏ hàng
router.post("/createOrder/:userID",createOrder)//thêm sản phẩm vào giỏ hàng bên trong giỏ hàng
router.post("/refund/:userID",refundMoney)
// router.post("/paymentCompleted/:userID",completedPayment) 
// router.get("/address/:userID", getUserAddress);
// router.get("/order/:userID", getOrderHistory);



export default router