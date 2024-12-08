import express, { Application, Request, Response, NextFunction } from "express";
import { GlobalErrorFunc } from "./app/global-error-handler";
const app: Application = express();
import cors from "cors";
import { productRouter } from "./app/modules/product/product.router";
import { orderRouter } from "./app/modules/order/order.routes";

// parser middleware
app.use(express.json());
app.use(cors());

app.use("/api", productRouter);

app.use("/api", orderRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! ");
});

app.use(GlobalErrorFunc.handledError);
app.use(GlobalErrorFunc.notFoundUrlError);

export default app;
