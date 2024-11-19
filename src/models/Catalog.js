const mongoose = require("mongoose");

const { Schema } = mongoose;

const { productSchema } = require("./Product");

const catalogSchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    products: {
        type: [productSchema],
    },
}, { timestamps: true }
);

const Catalog = mongoose.model("Catalog", catalogSchema);

module.exports = Catalog;