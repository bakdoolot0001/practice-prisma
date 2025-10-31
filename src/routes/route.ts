import { Router } from "express";
import todoRouter from "../modules/course/course.routes";

const globalRouter = Router();

globalRouter.use("/crud", todoRouter);

export default globalRouter;
