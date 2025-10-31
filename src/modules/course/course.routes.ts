import express from "express";
import courseController from "./course.controller";

const router = express.Router();

router.get("/get-all", courseController.getCourses);
router.post("/create", courseController.createCourse);
router.delete("/delete/:id", courseController.deleteCourse);
router.put("/update/:id", courseController.updateCourse);
router.patch("/patch/:id", courseController.patchCourse);

export default router;
