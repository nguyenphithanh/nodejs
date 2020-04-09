"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
exports.sign = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (req.session.loginedin === true) {
        req.session.loginedin = undefined;
        req.session.username = undefined;
    }
    try {
        res.render('pages/login');
    }
    catch (error) {
        throw error;
    }
});
//# sourceMappingURL=sign.js.map