import { Router } from "express";
import productRouter from "./products.js";
import catalogRouter from "./catalogs.js";

const router = Router();

// products routes
router.use("/", productRouter);

// catalogs routes
router.use("/", catalogRouter);

export default router;