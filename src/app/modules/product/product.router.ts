import  express  from "express";
import { productControllers } from "./product.controller";
import auth from "../../middleware/auth";

const router = express.Router();

router.post("/products", productControllers.createProduct);

router.get("/products", productControllers.getAllBike)

router.get("/products/:id", productControllers.getSingleBike);

router.patch("/updateProducts/:id", auth("admin"), productControllers.updateBike);

router.patch("/deleteProduct/:id", auth("admin"), productControllers.deleteABike);

router.get("/productSearch", productControllers.searchBike);

export const productRouter = router;
