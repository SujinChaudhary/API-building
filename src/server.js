import express from "express";
import connectDB from "./config/db.js";
import config from "./config/config.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";

const app = express();
connectDB();
app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);


app.listen(config.port, () => {
  console.log(`Server running at port ${config.port}`);
});
