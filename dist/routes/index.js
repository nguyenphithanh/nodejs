"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const about_1 = tslib_1.__importDefault(require("./about"));
const addUser_1 = tslib_1.__importDefault(require("./addUser"));
const admin_1 = tslib_1.__importDefault(require("./admin"));
const error_1 = tslib_1.__importDefault(require("./error"));
const home_1 = tslib_1.__importDefault(require("./home"));
const sign_1 = tslib_1.__importDefault(require("./sign"));
const router = express_1.Router();
router.use('/', home_1.default);
router.use('/sign', sign_1.default);
router.use('/about', about_1.default);
router.use('/admin', admin_1.default);
router.use('/adduser', addUser_1.default);
router.use(error_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map