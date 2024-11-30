import { Request, Response } from "express";
import { productService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const { products: productsData } = req.body;

    const result = await productService.createProductIntoDb(productsData);
    res.status(200).json({
      success: true,
      massage: " create bike store product successfully",
      data: result,
    });
  } catch (error : any) {
    res.status(400).json({
      message: "create product failed",
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

const getAllBike = async (req : Request, res: Response) =>{
  try {
    const result = await productService.getAllProductDb()
    res.status(200).json({
      success: true,
      massage: " create bike store product successfully",
      data: result,
    });


  }catch (error : any) {
    res.status(400).json({
      message: "get all product failed",
      success: false,
      error: error,
      stack: error.stack,
    });
  }
}
const getABike = async (req : Request, res: Response) =>{
  try {
  const  id = req.params._Id;

    const result = await productService.getProductIdDb(id)

    res.status(200).json({
      success: true,
      massage: " get a bike",
      data: result,
    });
  } catch (error : any) {
    res.status(400).json({
      message: "get single bike failed",
      success: false,
      error: error,
      stack: error.stack,
    });
  }
}

const updateBike = async (req : Request, res: Response) =>{
  try {
  const productId = req.params._Id
  const body = req.body
 const result = await productService.updateBikeDb(productId, body )

    res.status(200).json({
      success: true,
      massage: " update bike successfully",
      data: result,
    });
  } catch (error : any) {
    res.status(400).json({
      message: "updated failed",
      success: false,
      error: error,
      stack: error.stack,
    });
  }
}
const deleteABike = async (req : Request, res: Response) =>{
  try {
  const productId = req.params._Id
  
 const result = await productService.deleteABikeDb(productId)

//  if (result.deletedCount === 0) {
//   return res.status(404).json({
//     success: false,
//     message: `Bike not found with ID: ${productId}`,
//   });
// }

    res.status(200).json({
      success: true,
      massage: " delete single bike successfully",
      data: result,
    });
  } catch (error : any) {
    res.status(400).json({
      message: "delete bike failed",
      success: false,
      error: error,
      stack: error.stack,
    });
  }
}
export const productControllers = {
  createProduct,
  getAllBike,
  getABike,
  updateBike,
  deleteABike
};
