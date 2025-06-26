import { Order } from "./order.interface";
import { orderModel } from "./order.model";

const createOrderIntoDb = async (order: Order) => {
  const result = await orderModel.create(order);
  return result;
};

const getAllOrderIntoDb = async () => {
  const result = await orderModel.find();
  return result;
};
const getOrderIdIntoDb = async (email: string) => {
  const result = await orderModel.aggregate([
      {
      $match: {
        orderEmail: email
      }
    }
  ]);
  return result;
};

const deleteOrderIntoDb = async (orderId: string) => {
  const result = await orderModel.updateOne(
    {_id: orderId }, 
    { isDeleted: true });
  return result;
};

export const orderService = {
  createOrderIntoDb,
  getAllOrderIntoDb,
  getOrderIdIntoDb,
  deleteOrderIntoDb,
 
};
