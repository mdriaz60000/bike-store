
import  express  from 'express';
import { orderControllers } from './order.controller';

const router = express.Router()

router.post("/order", orderControllers.createOrder)
router.get("/order", orderControllers.getOrders)



export const orderRouter = router

