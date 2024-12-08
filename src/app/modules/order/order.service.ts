
import { Order } from './order.interface';
import { orderModel } from './order.model';

const createProductIntoDb = async (order : Order) => {
    const result = await orderModel.create(order); 
    return result;
  };


  export const orderService ={
    createProductIntoDb
  }