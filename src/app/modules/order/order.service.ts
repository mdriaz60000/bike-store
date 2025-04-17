
import { Order } from './order.interface';
import { orderModel } from './order.model';

const createProductIntoDb = async (order : Order) => {
    const result = await orderModel.create(order); 
    return result;
  };
const getOrderIntoDb = async () => {
    const result = await orderModel.find(); 
    return result;
  };
const deleteOrderIntoDb = async (orderId: string) => {
    const result = await orderModel.updateOne({orderId}, {isDeleted: true}); 
    return result;
  };

  const paymentIntoDb = async () => {
    const result = await orderModel.find(); 
    return result;
  };

  export const orderService ={
    createProductIntoDb,
    getOrderIntoDb,
    deleteOrderIntoDb,
    paymentIntoDb
  }