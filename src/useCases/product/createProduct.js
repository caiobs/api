import { Product as ProductModel } from "../../models/Product.js";

export const createProduct = async (productData) => {
  const product = await ProductModel.create(productData);
  return product;
};