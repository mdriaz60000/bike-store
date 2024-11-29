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
  } catch (err) {
    console.log(err);
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


  } catch (err) {
    console.log(err)
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
  } catch (err) {
    console.log(err)
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
  } catch (err) {
    console.log(err)
  }
}
const deleteABike = async (req : Request, res: Response) =>{
  try {
  const productId = req.params._Id
  
 const result = await productService.deleteABikeDb(productId)

 if (!result) {
  return res.status(404).json({
    success: false,
    message: "Bike not found or already deleted.",
  });
}

    res.status(200).json({
      success: true,
      massage: " delete single bike successfully",
      data: result,
    });
  } catch (err) {
    console.log(err)
  }
}
export const productControllers = {
  createProduct,
  getAllBike,
  getABike,
  updateBike,
  deleteABike
};
