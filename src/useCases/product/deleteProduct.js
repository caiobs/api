import { Product as ProductModel } from "../../models/Product.js";

export const deleteProduct = async (id) => {
  const deletedProduct = await ProductModel.findByIdAndDelete(id);
  return deletedProduct;
};