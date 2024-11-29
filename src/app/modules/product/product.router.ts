import  express  from "express";
import { productControllers } from "./product.controller";

const router = express.Router();

router.post("/products", productControllers.createProduct);

router.get("/products", productControllers.getAllBike)

router.get("/products/:id", productControllers.getABike);

router.put("/products/:productId", productControllers.updateBike);

router.delete("/products/:productId", productControllers.deleteABike);


export const productRouter = router;
