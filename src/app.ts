import express, { Application, Request, Response, NextFunction } from "express";
import cookieParser from 'cookie-parser';
import { GlobalErrorFunc } from "./app/global-error-handler";
const app: Application = express();
import cors from "cors";
import { productRouter } from "./app/modules/product/product.router";
import { orderRouter } from "./app/modules/order/order.routes";
import { UserRouter } from "./app/modules/user/user.routes";
import { authRouter } from "./app/modules/auth/auth.routes";



// parser middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin :"http://localhost:5173", credentials : true}));

app.use("/api", productRouter);
app.use("/api", orderRouter);

app.use("/api/v1/", UserRouter)
app.use("/api/v1/", authRouter)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! ");
});

app.use(GlobalErrorFunc.handledError);
app.use(GlobalErrorFunc.notFoundUrlError);

export default app;
