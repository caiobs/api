import { Product as ProductModel } from "../../models/Product.js";

export const getAllProducts = async () => {
  const products = await ProductModel.find();
  return products;
};