// import { ObjectId } from "mongoose";
import { product } from "./product.interface";
import { productModel } from "./product.model";

interface PaginationParams {
  page: number;
  limit: number;
}

const createBikeFromDb = async (Product: product) => {
  
  const result = await productModel.create(Product);
  return result;
};
const getAllBikeFromDb = async () => {
  const result = await productModel.find()
 return result
  };


const getSingleBikeDb = async (id: string) => {
  const result = await productModel.findOne({
    _id: id
  });
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



const searchBikeDb = async (query: Record<string, unknown>) => {

  let searchTerm = query?.searchTerm ? query?.searchTerm : ""
  const result = await productModel.find({
      $or: [
    { brand: { $regex: searchTerm, $options: "i" } },
    { model: { $regex: searchTerm, $options: "i" } },
  ],
  }
  );

  return result;
};

export default {
  searchBikeDb,
};


const PaginationBikesDb = async (query: any) => {
  const { searchTerm, page = 1, limit = 8, sortBy = "createdAt", sortOrder = "desc" } = query;

  const andConditions: any[] = [];

  if (searchTerm) {
    const isNumeric = !isNaN(Number(searchTerm));

    andConditions.push({
      $or: [
        { productName: { $regex: searchTerm, $options: "i" } },
        { brand: { $regex: searchTerm, $options: "i" } },
        { category: { $regex: searchTerm, $options: "i" } },
        ...(isNumeric ? [{ price: Number(searchTerm) }] : []),
        ...(isNumeric ? [{ rating: Number(searchTerm) }] : [])
      ]
    });
  }

  const whereCondition = andConditions.length > 0 ? { $and: andConditions } : {};

  const skip = (Number(page) - 1) * Number(limit);
  const sortCondition: Record<string, 1 | -1> = {
    [sortBy]: sortOrder === "asc" ? 1 : -1
  };

  const products = await productModel.find(whereCondition)
    .skip(skip)
    .limit(Number(limit))
    .sort(sortCondition);

  const total = await productModel.countDocuments(whereCondition);

  return {
    meta: {
      page: Number(page),
      limit: Number(limit),
      total
    },
    data: products
  };
};



export const productService = {
  createBikeFromDb,
  getAllBikeFromDb,
  getSingleBikeDb,
  updateBikeDb,
  deleteABikeDb,
  searchBikeDb,
  PaginationBikesDb
};
