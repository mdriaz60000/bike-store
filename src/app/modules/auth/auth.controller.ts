import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { AuthServices } from "./auth.service";
import httpStatus from 'http-status';

;

const loginUser = catchAsync(async (req, res, next) => {
  // const { data } = req.body;
  const result = await AuthServices.loginUser(req?.body);
  const { refreshToken, accessToken } = result;

  res.cookie("refreshToken", refreshToken, {
    // secure: config.NODE_ENV === 'production',
    secure: true,
    httpOnly: true,
    sameSite: "none",
    maxAge: 2 * 24 * 60 * 60 * 1000,
  });
  sendResponse(res, {
    success: true,
    message: "Login successful",
    statusCode: httpStatus.OK,
    data: {
      accessToken,
    },
  });
});

const changePassword = catchAsync(async (req, res, next) => {
  // const { data } = req.body;
await AuthServices.changePasswordIntoDB(req?.body);
  sendResponse(res, {
    success: true,
    message: "Password changed successfully",
    statusCode:httpStatus.OK,
    // data: result,
  });
})

const refreshToken = catchAsync(async (req, res, next) => {
  const {refreshToken} = req.cookies;

  const result = await AuthServices.refreshToken(refreshToken)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Access token is retrieved successfully!',
    data: result,
  });

})


export const AuthController = {
  loginUser,
  changePassword,
  refreshToken
};