import mongoose from "mongoose";
import { productSchema } from "./Product.js";

const { Schema } = mongoose;

const catalogSchema = new Schema(
    {
        user: {
            type: String,
            required: true,
        },
        products: {
            type: [productSchema],
        },
    },
    { timestamps: true }
);

const Catalog = mongoose.model("Catalog", catalogSchema);

export default Catalog;