
import  express  from 'express';


const router = express.Router()

router.post("/auth", authControllers.createOrder)


export const orderRouter = router