import { Product as ProductModel } from "../../models/Product.js";

export const updateProduct = async (id, productData) => {
  const updatedProduct = await ProductModel.findByIdAndUpdate(id, productData, { new: true });
  return updatedProduct;
};