import { NextFunction, Request, Response } from "express";
import { authServices } from "./auth.service";
import sendResponse from "../../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import config from "../../config";



const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await authServices.registerIntoDb(req.body);
    res.status(200).json({
      success: true,
      message: "Created bike store product successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await authServices.loginIntoDb(req.body);
    const { reFreshToken, accessUser, accessToken} = result

     res.cookie("reFreshToken", reFreshToken, {
      secure: config.node_env === "production",
      httpOnly: true,
     })

    sendResponse(res, {
      statusCode: StatusCodes.ACCEPTED,
      success: true,
      message: "Login successful",
      data: {
        accessToken,
        reFreshToken,
        accessUser,
      }
    });
  } catch (err: any) {
    next(err);
  }
};

export const authControllers = {
  register,
  login,
};
