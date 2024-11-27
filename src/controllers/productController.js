import { Product as ProductModel } from "../models/Product.js";

const productController = {
    create: async (req, res) => {
        try {
            const product = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                storage: req.body.storage,
            };

            const response = await ProductModel.create(product);

            res.status(201).json({ response, msg: "Created product." });

        } catch (error) {
            console.log(error);
        }
    },
    getAll: async (req, res) => {
        try {
            const products = await ProductModel.find();
            res.json(products);
        } catch (error) {
            console.log(error);
        }
    },
    get: async (req, res) => {
        try {
            const id = req.params.id;
            const product = await ProductModel.findById(id);

            if (!product) {
                res.status(404).json({ msg: "Product not found." });
                return;
            }

            res.json(product);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const product = await ProductModel.findById(id);

            if (!product) {
                res.status(404).json({ msg: "Product not found." });
                return;
            }

            const deletedProduct = await ProductModel.findByIdAndDelete(id);

            res.status(204).json({ deletedProduct, msg: "Product deleted." });

        } catch (error) {
            console.log(error);
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;

            const product = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                storage: req.body.storage,
            };

            const updatedProduct = await ProductModel.findByIdAndUpdate(id, product, { new: true });

            if (!updatedProduct) {
                res.status(404).json({ msg: "Product not found." });
                return;
            }

            res.status(200).json({ product: updatedProduct, msg: "Product updated." });

        } catch (error) {
            console.log(error);
        }
    }
};

export default productController;