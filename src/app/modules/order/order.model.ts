import { Schema, model, connect } from "mongoose";
import { Order } from "./order.interface";

const orderSchema = new Schema<Order>({
    
       orderEmail: { type: String, required: true },
        userName: { type: String, required: true },
        productName: { type: String, required: true },
        category: { type: String, required: true },
        price: { type: Number, required: true },
        brand: { type: String, required: true },
        img: { type: String, required: true },
        inStock: { type: Boolean, default: true },
        isDeleted: { type: Boolean, default: false },
      },
     
      {versionKey:false,timestamps:true }
    
);

orderSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

orderSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});


export const orderModel = model<Order>("order", orderSchema)