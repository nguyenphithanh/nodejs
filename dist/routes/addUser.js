"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const adminController = tslib_1.__importStar(require("../controllers/admin"));
const router = express_1.Router();
router.get('/', adminController.getadduserpage);
router.post('/', adminController.postadduserpage);
exports.default = router;
//# sourceMappingURL=addUser.js.map