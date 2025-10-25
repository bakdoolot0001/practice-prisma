import { Router } from "express";
import crudControllers from "./crud.controllers";

const router = Router();

router.get("/get-all", crudControllers.getData)
router.post("/create", crudControllers.createData)
router.delete("/delete/:id", crudControllers.deleteData)
router.put("/update/:id", crudControllers.putData)
router.patch("/update/:id", crudControllers.patchData)

export default router;
