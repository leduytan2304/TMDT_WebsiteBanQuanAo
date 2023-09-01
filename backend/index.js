import express from "express";
import productRoutes from "./routes/product.js";
import detailProduct from "./routes/detailProduct.js"
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import cartRoutes from "./routes/cart.js";

// import payment from "./routes/payment.js"
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(cookieParser());
app.use("/api/image", productRoutes);
app.use("/api/chi-tiet-do",detailProduct);
// app.use("/api/testing",testaa)
// app.use("/api/payment",payment)
// app.use("/api/chi-tiet-quan",detailProduct)
app.use("/api/user", userRoutes)
app.use("/api/cart_payment", cartRoutes); // API thanh toán giỏ hàng , // lưu ý chưa cá nhân hóa cho từng user đc
app.use("/api", authRoutes); // API để login/register




// app.use("api/payment",payment);

app.listen(8000, () => {
  console.log("API working!");
});
