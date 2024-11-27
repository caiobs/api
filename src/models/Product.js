import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        storage: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export { Product, productSchema };