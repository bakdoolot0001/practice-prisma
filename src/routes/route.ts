import cors from "cors";
import { Router } from "express";
import todoRouter from "../modules/crud/crud.routes";

const globalRouter = Router();

const corsConfig = {
  origin: [
    "http://localhost:3000",
    "https://bunch-to-backend.vercel.app",
  ],
};

globalRouter.use("/crud", cors(corsConfig), todoRouter);

export default globalRouter;
