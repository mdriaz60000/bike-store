import { Schema, model, connect } from "mongoose";
import { Order } from "./order.interface";

const orderSchema = new Schema<Order>({
    email: { type: String, required: true },
    product: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true }
},
{versionKey:false,timestamps:true }
);


export const orderModel = model<Order>("order", orderSchema)