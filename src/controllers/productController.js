import { createProduct } from "../useCases/product/createProduct.js";
import { getAllProducts } from "../useCases/product/getAllProducts.js";
import { getProductById } from "../useCases/product/getProductById.js";
import { updateProduct } from "../useCases/product/updateProduct.js";
import { deleteProduct } from "../useCases/product/deleteProduct.js";

const productController = {
  create: async (req, res) => {
    try {
      const productData = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        storage: req.body.storage,
      };

      const product = await createProduct(productData);
      res.status(201).json({ product, msg: "Created product." });
    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const products = await getAllProducts();
      res.json(products);
    } catch (error) {
      console.log(error);
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;
      const product = await getProductById(id);

      if (!product) {
        return res.status(404).json({ msg: "Product not found." });
      }

      res.json(product);
    } catch (error) {
      console.log(error);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const product = await getProductById(id);

      if (!product) {
        return res.status(404).json({ msg: "Product not found." });
      }

      await deleteProduct(id);
      res.status(204).send();
    } catch (error) {
      console.log(error);
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const productData = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        storage: req.body.storage,
      };

      const updatedProduct = await updateProduct(id, productData);

      if (!updatedProduct) {
        return res.status(404).json({ msg: "Product not found." });
      }

      res.status(200).json({ product: updatedProduct, msg: "Product updated." });
    } catch (error) {
      console.log(error);
    }
  },
};

export default productController;