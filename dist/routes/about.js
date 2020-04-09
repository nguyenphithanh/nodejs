"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const aboutController = tslib_1.__importStar(require("../controllers/about"));
const homeController = tslib_1.__importStar(require("../controllers/home"));
const router = express_1.Router();
router.get('/about', aboutController.about);
router.get('/login', homeController.getlogin);
router.post('/login', homeController.postlogin);
exports.default = router;
//# sourceMappingURL=about.js.map