// import { NextFunction } from "express"
// import jwt, { JwtPayload } from 'jsonwebtoken'; 
// import catchAsync from "../../utils/catchAsync"
// import { User } from "../modules/user/user.model";
// import config from "../config";


// }

// const auth = (requiredRoles: string) =>{
//   return catchAsync(async(req: Request, res: Response, next: NextFunction) =>{
//     const token = req.headers.authorization;
//        if (!token) {
//         throw new Error("token error")
//        }

//          // checking if the given token is valid
//     const decoded = jwt.verify(
//         token,
//         config.jwt_access_secret as string,
//       ) as JwtPayload;
  
  
//       const { role, email} = decoded;
  
//       // checking if the user is exist
//     const user = await User.findOne({ email });
  
//     if (!user) {
//       throw new Error('This user is not found !')
//     }
//     // const userStatus = user?.userStatus

//     // if (userStatus === 'inactive') {
//     //   throw new Error('This user is blocked ! !')
//     // }

//     if (requiredRoles && !requiredRoles.includes(role)) {
//         throw new Error(
//           'You are not authorized',
//         );
//       }
  
//       req.user = decoded as JwtPayload;
//       next();


//    })
// }

// export default auth;


import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import catchAsync from "../../utils/catchAsync";
import { User } from "../modules/user/user.model";
import config from "../config";
import { TUserRole } from "../modules/user/user.interface";



const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    
    
    if (!token) {
      return res.status(401).json({ message: "Unauthorized no token" });
    }

    try {
      const decoded = jwt.verify(token, config.jwt_access_secret as string) as JwtPayload;

      
      const { role, email } = decoded;

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      if (requiredRoles && !requiredRoles.includes(decoded?.role)) {
        throw new Error("You are not authorized" )
      }

      req.user = decoded as JwtPayload;
      next();

    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
  });
};

export default auth;

