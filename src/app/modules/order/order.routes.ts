
import  express  from 'express';
import { orderControllers } from './order.controller';

const router = express.Router()

router.post("/order", orderControllers.createOrder)
router.get("/order", orderControllers.getOrders)
router.get("/payment", orderControllers.payment)


export const orderRouter = router

