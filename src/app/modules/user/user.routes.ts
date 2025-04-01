import express from 'express';
import { UserController } from './user.controller';


const router = express.Router();

router.post("/user",  UserController.createUser) 
router.get("/users",  UserController.getAllUsers) 
router.get("/user/:id",  UserController.getUserById) 
router.put("/user/:id",  UserController.updateUser) 
router.delete("/user/:id",  UserController.deleteUser) 


export const UserRouter = router;
