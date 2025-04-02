import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import { bcrypt } from 'bcrypt';



const registerIntoDb = async(payload : TUser ) =>{
    const result = await User.create(payload)
    return result
}
const loginIntoDb = async(payload : TLoginUser ) =>{
    const user = await User.findOne({email: payload?.email})
     if (! user) {
        throw new Error("this is user error")
     }
     const isPasswordMatch = await bcrypt.compare(payload?.password, user?.password)
     if (!isPasswordMatch) {
        throw new Error("password is wrong")
     }
}



export const authServices = {
    registerIntoDb,
    loginIntoDb
}