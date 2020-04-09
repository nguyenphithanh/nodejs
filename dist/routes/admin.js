"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const adminController = tslib_1.__importStar(require("../controllers/admin"));
const router = express_1.Router();
router.get('/', adminController.listuser);
exports.default = router;
//# sourceMappingURL=admin.js.map