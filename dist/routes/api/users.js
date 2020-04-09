"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const userController = tslib_1.__importStar(require("../../controllers/api/user"));
const userRouter = express_1.Router();
userRouter.get('/', userController.getUsers);
userRouter.post('/', userController.addUser);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);
exports.default = userRouter;
//# sourceMappingURL=users.js.map