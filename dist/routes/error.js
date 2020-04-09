"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const errorController = tslib_1.__importStar(require("../controllers/error"));
const router = express_1.Router();
router.use(errorController.error);
exports.default = router;
//# sourceMappingURL=error.js.map