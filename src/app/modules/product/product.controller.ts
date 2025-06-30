import { NextFunction, Request, Response } from "express";
import { productService } from "./product.service";
import productSchemaValidation from "./zodvalidation";

const createProduct = async (req: Request, res: Response, next : NextFunction) => {
  try {
 
    const result = await productService.createBikeFromDb(req.body);
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
    const result = await productService.getAllBikeFromDb()
    res.status(200).json({
      success: true,
      massage: " create bike store product successfully",
      data: result,
    });


  }catch (err : any) {
  next(err)
  }
}
const getSingleBike = async (req : Request, res: Response, next : NextFunction) =>{
  try {
  const  id = req.params._Id;

    const result = await productService.getSingleBikeDb(id)

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
  const {id} = req.params
  const body = req.body
 const result = await productService.updateBikeDb(id, body )

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
  const{ id }= req.params
  const result = await productService.deleteABikeDb(id )
    res.status(200).json({
      success: true,
      massage: " delete single bike successfully",
      data: result,
    });
  } catch (err : any) {
  next(err)
  }
}


export const searchBike = async (req: Request, res: Response, next: NextFunction) => {
  try {
    
//  console.log(req.query)
     const result = await productService.searchBikeDb(req.query);

    res.status(200).json({
      success: true,
      message: "Search bike successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
export const productControllers = {
  createProduct,
  getAllBike,
  getSingleBike,
  updateBike,
  deleteABike,
  searchBike
};
