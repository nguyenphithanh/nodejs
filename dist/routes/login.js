"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const homeController = tslib_1.__importStar(require("../controllers/home"));
const router = express_1.Router();
router.use(homeController.logindifferentpage);
exports.default = router;
//# sourceMappingURL=login.js.map