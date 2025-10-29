import cors from "cors";
import { Router } from "express";
import todoRouter from "../modules/crud/crud.routes";

const globalRouter = Router();

const corsConfig = {
  origin: [
    "http://localhost:3000",
    "https://bunch-to-backend.vercel.app",
    "https://bunch-to-backend-git-master-ergeshov-bakdoolots-projects.vercel.app",
    "https://bunch-to-backend-8uqh2b4p9-ergeshov-bakdoolots-projects.vercel.app",
    "https://bunch-to-backend-7l4by6z1g-ergeshov-bakdoolots-projects.vercel.app",
    "",
  ],
};

globalRouter.use("/crud", cors(corsConfig), todoRouter);

export default globalRouter;
