import { NextFunction, Request, Response } from "express";
import { productService } from "./product.service";
import productSchemaValidation from "./zodvalidation";

const createProduct = async (req: Request, res: Response, next : NextFunction) => {
  try {
    const { products: productsData } = req.body;

    const productValidation = productSchemaValidation.parse(productsData)

    const result = await productService.createProductIntoDb(productValidation);
    res.status(200).json({
      success: true,
      massage: " create bike store product successfully",
      data: result,
    });
  } catch (err : any) {
    next(err)
  }
};

const getAllBike = async (req : Request, res: Response, next : NextFunction) =>{
  try {
    const result = await productService.getAllProductDb()
    res.status(200).json({
      success: true,
      massage: " create bike store product successfully",
      data: result,
    });


  }catch (err : any) {
  next(err)
  }
}
const getABike = async (req : Request, res: Response, next : NextFunction) =>{
  try {
  const  id = req.params._Id;

    const result = await productService.getProductIdDb(id)

    res.status(200).json({
      success: true,
      massage: " get a bike",
      data: result,
    });
  } catch (err : any) {
   next(err)
  }
}

const updateBike = async (req : Request, res: Response, next : NextFunction ) =>{
  try {
  const productId = req.params._Id
  const body = req.body
 const result = await productService.updateBikeDb(productId, body )

    res.status(200).json({
      success: true,
      massage: " update bike successfully",
      data: result,
    });
  } catch (err : any) {
   next(err)
  }
}
const deleteABike = async (req : Request, res: Response, next : NextFunction) =>{
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
  } catch (err : any) {
  next(err)
  }
}
export const productControllers = {
  createProduct,
  getAllBike,
  getABike,
  updateBike,
  deleteABike
};
