import express from 'express';
import { UserController } from './user.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from './user.constanst';

const router = express.Router();

router.post("/user",  UserController.createUser) 

router.get("/user",auth("admin"), UserController.getAllUsers) 

router.get("/user/:id",auth("admin", "user"),  UserController.getUserById) 

router.patch("/user/:id",auth("admin"), UserController.updateUser) 

router.patch("/deleteUser/:id", auth("admin",), UserController.deleteUser) 


export const UserRouter = router;
