import { Schema, model, connect } from "mongoose";

export type product = {
  productName: string;
  brand: string;
  price: number;
  img:  string;
  category: "Mountain" | "Road" | "Hybrid" | "Electric";
  description: string;
  quantity: number;
  inStock: boolean;
  isDeleted : boolean
}
