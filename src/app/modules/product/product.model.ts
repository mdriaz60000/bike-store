import { model, Schema } from "mongoose";
import { product } from "./product.interface";



const productSchema = new Schema<product>({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true, min: 0},
  category: {
    type: String,
    enum: ["Mountain", "Road", "Hybrid", "Electric"],
    required: true,
  },
  description: { type: String, required: true },
  quantity: { type: Number, default: 1,min:0},
  inStock: { type: Boolean, default: true }
});

export const productModel = model<product>("product", productSchema);
