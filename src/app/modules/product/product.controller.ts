import { Request, Response } from "express";
import { productService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const { products: productsData } = req.body;

    const result = await productService.createProductIntoDb(productsData);
    res.status(200).json({
      success: true,
      massage: " create bike store product successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const productControllers = {
  createProduct,
};
