import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import connectDB from "./config/db";
import productRoutes from "./routes/productRoutes";
import { errorHandler, notFound } from "./middleware/errorMiddleware";
dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("API funcionando");
});
app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT);
console.log(
  chalk.yellow.bold(
    `Aplicación en modo ${process.env.NODE_ENV} en el puerto ${PORT}`
  )
);
