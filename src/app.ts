import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import { productRouter } from "./app/modules/product/product.router";

// parser middleware
app.use(express.json());
app.use(cors());

app.use("/api", productRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! ");
});

export default app;
