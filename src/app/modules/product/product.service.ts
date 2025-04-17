// import { ObjectId } from "mongoose";
import { product } from "./product.interface";
import { productModel } from "./product.model";

const createProductIntoDb = async (Product: product) => {
  const result = await productModel.create(Product); 
  return result;
};
const getAllProductDb = async () => {
  const result = await productModel.find(); 
  return result;
};
const getProductIdDb = async (id: string) => {
  const result = await productModel.findOne({id}); 
  return result;
};
const updateBikeDb = async (productId : string, updateData: product) => {
  const result = await productModel.findByIdAndUpdate(productId, updateData,  { new: true }); 
  return result;
};
const deleteABikeDb = async (productId : string) => {
  const result = await productModel.updateOne({productId}, {isDeleted: true}); 
  return result;
};


export const productService = {
  createProductIntoDb,
  getAllProductDb,
  getProductIdDb,
  updateBikeDb,
  deleteABikeDb,
};

