"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const aboutController = tslib_1.__importStar(require("../controllers/about"));
const homeController = tslib_1.__importStar(require("../controllers/home"));
const signController = tslib_1.__importStar(require("../controllers/sign"));
const router = express_1.Router();
router.get('/', homeController.index);
router.get('/test', homeController.test);
router.get('/login', homeController.getlogin);
router.post('/login', homeController.postlogin);
router.post('/sign', signController.sign);
router.get('/login', homeController.getlogin);
router.post('/login', homeController.postlogin);
router.get('/about', aboutController.about);
exports.default = router;
//# sourceMappingURL=home.js.map