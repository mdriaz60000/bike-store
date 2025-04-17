import { model, Schema } from "mongoose";
import { product } from "./product.interface";



const productSchema = new Schema<product>(
  {
    productName: { type: String, required: true },
  brand: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: Number, required: true, min: 0},
  category: {
    type: String,
    enum: ["Mountain", "Road", "Hybrid", "Electric"],
    required: true,
  },
  description: { type: String, required: true },
  quantity: { type: Number, default:0 },
  inStock: { type: Boolean, default: true },
  isDeleted : {type: Boolean, default : false},
},
{
  timestamps: true,
},
);

productSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

productSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});


export const productModel = model<product>("product", productSchema);
