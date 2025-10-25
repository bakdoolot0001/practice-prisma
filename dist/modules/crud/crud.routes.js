"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const crud_controllers_1 = __importDefault(require("./crud.controllers"));
const router = (0, express_1.Router)();
router.get("/get-all", crud_controllers_1.default.getData);
router.post("/create", crud_controllers_1.default.createData);
router.delete("/delete/:id", crud_controllers_1.default.deleteData);
router.put("/update/:id", crud_controllers_1.default.putData);
router.patch("/update/:id", crud_controllers_1.default.patchData);
exports.default = router;
//# sourceMappingURL=crud.routes.js.map