import { product } from "./product.interface";
import { productModel } from "./product.model";

const createProductIntoDb = async (Product: product) => {

  const result = await productModel.create(Product); 
  return result;
};

export const productService = {
  createProductIntoDb,
};

