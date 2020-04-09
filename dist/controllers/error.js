"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
exports.error = (req, res, _) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const numberErorr = 404;
    res.status(numberErorr).render('pages/error404.ejs');
});
//# sourceMappingURL=error.js.map