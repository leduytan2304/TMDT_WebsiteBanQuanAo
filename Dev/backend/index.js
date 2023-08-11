import express from "express";
import productRoutes from "./routes/product.js";
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
app.use("/api/image/", productRoutes);

app.listen(8000, () => {
  console.log("API working!");
});
