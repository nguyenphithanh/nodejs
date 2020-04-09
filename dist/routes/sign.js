"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const homeController = tslib_1.__importStar(require("../controllers/home"));
const signController = tslib_1.__importStar(require("../controllers/sign"));
const router = express_1.Router();
router.get('/sign', signController.sign);
router.get('/login', homeController.getlogin);
router.post('/login', homeController.postlogin);
exports.default = router;
//# sourceMappingURL=sign.js.map