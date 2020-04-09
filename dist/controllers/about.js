"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
exports.about = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.session.username === undefined) {
            res.redirect('/login');
        }
        else {
            res.locals.username = req.session.username;
            res.render('pages/about');
        }
    }
    catch (error) {
        throw error;
    }
});
//# sourceMappingURL=about.js.map