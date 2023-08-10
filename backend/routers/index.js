const express = require("express");
const userRouter = require("./users");
const productRouter = require("./products");

const rootRouter = express.Router();

rootRouter.use("/users", userRouter);
rootRouter.use("/products", productRouter);


module.exports = rootRouter;
