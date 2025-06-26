
import  express  from 'express';
import { orderControllers } from './order.controller';
import auth from '../../middleware/auth';

const router = express.Router()

router.post("/order", auth("admin", "user"), orderControllers.createOrder)
router.get("/order",auth("admin", "user"), orderControllers.getAllOrders)
router.get("/order/:id",auth("admin", "user"), orderControllers.getOrderId)
router.patch("/deleteOrder/:id",auth("admin", "user"), orderControllers.deleteOrder)


export const orderRouter = router

