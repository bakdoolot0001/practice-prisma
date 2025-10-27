import { Request, Response } from "express";
import prisma from "../../config/prisma";

const getData = async (req: Request, res: Response) => {
  try {
    const data = await prisma.user.findMany();
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: "false",
      message: `Error in getData: ${error}`,
    });
  }
};

const createData = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const newData = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    res.status(201).json({
      success: true,
      data: newData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error in createData: ${error}`,
    });
  }
};

const deleteData = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = Number(id);
    const deleted = await prisma.user.delete({
      where: { id: userId },
    });
    res.status(200).json({
      success: true,
      message: `User deleted successfully`,
      deleted,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error in deleteData: ${error}`,
    });
  }
};

const putData = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const putedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: { name, email },
    });
    res.status(200).json({
      success: true,
      data: putedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Ошибка при обновлении пользовотеля",
      error: `${error}`,
    });
  }
};

const patchData = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const patchedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: updateData,
    });
    res.status(200).json({
      success: true,
      data: patchedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Ошибка при частичном обновлении пользовотеля",
      error: `${error}`,
    });
  }
};

export default {
  getData,
  createData,
  deleteData,
  putData,
  patchData,
};
