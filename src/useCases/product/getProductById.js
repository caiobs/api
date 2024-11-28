import { Product as ProductModel } from "../../models/Product.js";

export const getProductById = async (id) => {
  const product = await ProductModel.findById(id);
  return product;
};