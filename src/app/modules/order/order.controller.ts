import { NextFunction, Request, Response } from "express";
import { orderService } from "./order.service";
import orderValidationSchema from "./order.validation";



const createOrder = async (req: Request, res: Response, next : NextFunction) => {
    try {
      const { order: orderData } = req.body;
      
      const orderValidation = orderValidationSchema.parse(orderData)
  
      const result = await orderService.createProductIntoDb(orderValidation);
      res.status(200).json({
        success: true,
        massage: " create order successfully",
        data: result,
      });
    } catch (err : any) {
      next(err)
    }
  };



  export const orderControllers = {
    createOrder
  }