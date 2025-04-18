import { NextFunction, Request, Response } from "express";
import { orderService } from "./order.service";


const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { orderEmail, productName, category, price, brand, img } = req.body;
    const result = await orderService.createProductIntoDb(req.body);
    res.status(200).json({
      success: true,
      massage: " create order successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
 const getOrders = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // const { email } = req.query;

    // const filter = email ? { email } : {};

    const orders = await orderService.getOrderIntoDb();
    res.status(200).json(orders);
  } catch (err: any) {
    next(err);
  }
};
 const deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
  const orderId = req.params._Id
    console.log(orderId)

    const orders = await orderService.deleteOrderIntoDb(orderId);
    res.status(200).json(orders);
  } catch (err: any) {
    next(err);
  }
};
 

export const orderControllers = {
  createOrder,
  getOrders,
  
};
