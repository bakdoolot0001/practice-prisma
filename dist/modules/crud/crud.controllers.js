"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../../config/prisma"));
const getData = async (req, res) => {
    try {
        const data = await prisma_1.default.user.findMany();
        res.status(200).json({
            success: true,
            data,
        });
    }
    catch (error) {
        res.status(500).json({
            success: "false",
            message: `Error in getData: ${error}`,
        });
    }
};
const createData = async (req, res) => {
    try {
        const { name, email } = req.body;
        const newData = await prisma_1.default.user.create({
            data: {
                name,
                email,
            },
        });
        res.status(201).json({
            success: true,
            data: newData,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: `Error in createData: ${error}`,
        });
    }
};
const deleteData = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await prisma_1.default.user.delete({
            where: { id: Number(id) },
        });
        res.status(200).json({
            success: true,
            message: `User deleted successfully`,
            deleted,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: `Error in deleteData: ${error}`,
        });
    }
};
const putData = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        const putedUser = await prisma_1.default.user.update({
            where: { id: Number(id) },
            data: { name, email },
        });
        res.status(200).json({
            success: true,
            data: putedUser,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Ошибка при обновлении пользовотеля",
            error: `${error}`,
        });
    }
};
const patchData = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const patchedUser = await prisma_1.default.user.update({
            where: { id: Number(id) },
            data: updateData,
        });
        res.status(200).json({
            success: true,
            data: patchedUser,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Ошибка при частичном обновлении пользовотеля",
            error: `${error}`,
        });
    }
};
exports.default = {
    getData,
    createData,
    deleteData,
    putData,
    patchData,
};
//# sourceMappingURL=crud.controllers.js.map