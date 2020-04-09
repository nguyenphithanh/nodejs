"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const users_1 = tslib_1.__importDefault(require("./users"));
const router = express_1.Router();
router.use('/user', users_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map