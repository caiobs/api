const { Product: ProductModel } = require("../models/Product");

const productController = {
    create: async (req, res) => {
        try {   
            const product = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                stock: req.body.stock,
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
    get: async(req, res) => {
        try {
            const id = req.params.id;
            const product = await ProductModel.findById(id);

            if(!product) {
                res.status(404).json({ msg: "Product not found." });
                return;
            };

            res.json(product);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id;

            const product = await ProductModel.findById(id);

            if(!product) {
                res.status(404).json({ msg: "Product not found." });
                return;
            };

            const deletedProduct = await ProductModel.findByIdAndDelete(id);

            res
                .status(200)
                .json({ deletedProduct, msg: "Product deleted." });

        } catch (error) {
            console.log(error);
        }
    },
    update: async (req, res) => {
        const id = req.params.id;

        const product = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
        };

        const updatedProduct = await ProductModel.findByIdAndUpdate(id, product);

        if(!updatedProduct) {
            res.status(404).json({ msg: "Product not found." });
            return;
        };

        res.status(200).json({ product, msg: "Product updated." });
    }
};

module.exports = productController;
