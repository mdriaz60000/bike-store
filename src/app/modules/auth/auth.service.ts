import config from "../../config";
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import bcrypt from 'bcrypt';  
import jwt from 'jsonwebtoken'; 



const registerIntoDb = async(payload : TUser ) =>{
    const result = await User.create(payload)
    return result
}
const loginIntoDb = async(payload : TLoginUser ) =>{
    const user = await User.findOne({email: payload?.email}).select("+password")
    // console.log({user})
     if (!user) {
        throw new Error("this is user error")
     }
     const isPasswordMatch = await bcrypt.compare(payload?.password, user?.password)

     if (!isPasswordMatch) {
        throw new Error("password is wrong")
     }
    
     const accessToken = jwt.sign({email: user?.email, role: user?.role}, config.jwt_access_secret, {expiresIn : "2d"})

     const reFreshToken = jwt.sign({email: user?.email, role: user?.role}, config.jwt_refresh_secret, {expiresIn : "30d"})

     const accessUser = {name : user?.name, email: user?.email, role: user?.role}
     return {  accessUser, accessToken, reFreshToken}

}



export const authServices = {
    registerIntoDb,
    loginIntoDb
}