import { NextFunction, Request, Response } from "express";
import { authServices } from "./auth.service";

const register = async(req: Request, res : Response, next: NextFunction) =>{
  try{
    const result = await authServices.registerIntoDb(req.body)
    res.status(200).json({
      success: true,
      massage: " create bike store product successfully",
      data: result,
    });
    
  } catch (err : any) {
    next(err)
  }
}

export const authControllers = {
  register
}