import { NextFunction, Request, Response } from "express";
import { orderService } from "./order.service";


const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { orderEmail, productName, category, price, brand, img } = req.body;
    const result = await orderService.createOrderIntoDb(req.body);
    res.status(200).json({
      success: true,
      massage: " create order successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
 const getAllOrders = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await orderService.getAllOrderIntoDb();
    res.status(200).json(orders);
  } catch (err: any) {
    next(err);
  }
};
 const getOrderId = async (req: Request, res: Response, next: NextFunction) => {
  try {
     const { id } = req.params;
   
    const orders = await orderService.getOrderIdIntoDb(id);
    res.status(200).json(orders);
  } catch (err: any) {
    next(err);
  }
};
 const deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
  const {id} = req.params
 
    const orders = await orderService.deleteOrderIntoDb(id);
    res.status(200).json(orders);
  } catch (err: any) {
    next(err);
  }
};
 

export const orderControllers = {
  createOrder,
  getAllOrders,
  getOrderId,
  deleteOrder
  
};
