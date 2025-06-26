// import { ObjectId } from "mongoose";
import { product } from "./product.interface";
import { productModel } from "./product.model";

const createBikeFromDb = async (Product: product) => {
  const result = await productModel.create(Product);
  return result;
};
const getAllBikeFromDb = async () => {
  const result = await productModel.find({
    isDeleted: false,
  });
  return result;
};
const getSingleBikeDb = async (id: string) => {
  const result = await productModel.findOne({ id });
  return result;
};
const updateBikeDb = async (productId: string, updateData: product) => {
  const result = await productModel.findByIdAndUpdate(productId,
    { $set: updateData } ,
     {new: true,}
    );
  return result;
};
const deleteABikeDb = async (productId: string) => {
  const result = await productModel.updateOne(
    { _id: productId },
    { isDeleted: true }
  );
  return result;
};

export const productService = {
  createBikeFromDb,
  getAllBikeFromDb,
  getSingleBikeDb,
  updateBikeDb,
  deleteABikeDb,
};
