import { Router } from "express";
import todoRouter from "../modules/crud/crud.routes";

const globalRouter = Router();

globalRouter.use("/crud", todoRouter);

export default globalRouter;
