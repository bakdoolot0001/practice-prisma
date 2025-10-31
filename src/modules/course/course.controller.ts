import { Request, Response } from "express";
import prisma from "../../config/prisma";

const getCourses = async (req: Request, res: Response) => {
  try {
    const courses = await prisma.course.findMany({
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json({
      success: true,
      data: courses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error in getCourses: ${error}`,
    });
  }
};

const createCourse = async (req: Request, res: Response) => {
  try {
    const { title, description, price, teacherId } = req.body;

    if (!title || !price || !teacherId) {
      return res.status(400).json({
        success: false,
        message: "Талаалар толук эмес! (title, price, teacherId талап кылынат)",
      });
    }

    const newCourse = await prisma.course.create({
      data: {
        title,
        description,
        price: parseFloat(price),
        teacherId: Number(teacherId),
      },
    });

    res.status(201).json({
      success: true,
      message: "Курс ийгиликтүү түзүлдү!",
      data: newCourse,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error in createCourse: ${error}`,
    });
  }
};

const deleteCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleted = await prisma.course.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({
      success: true,
      message: "Курс ийгиликтүү өчүрүлдү!",
      data: deleted,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error in deleteCourse: ${error}`,
    });
  }
};

const updateCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, price, teacherId } = req.body;

    const updated = await prisma.course.update({
      where: { id: Number(id) },
      data: {
        title,
        description,
        price: parseFloat(price),
        teacherId: Number(teacherId),
      },
    });

    res.status(200).json({
      success: true,
      message: "Курс ийгиликтүү жаңыланды!",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error in updateCourse: ${error}`,
    });
  }
};

const patchCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const patched = await prisma.course.update({
      where: { id: Number(id) },
      data,
    });

    res.status(200).json({
      success: true,
      message: "Курс жарым-жартылай жаңыланды!",
      data: patched,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error in patchCourse: ${error}`,
    });
  }
};

export default {
  getCourses,
  createCourse,
  deleteCourse,
  updateCourse,
  patchCourse,
};
