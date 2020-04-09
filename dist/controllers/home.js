"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sequelize_1 = tslib_1.__importDefault(require("../sequelize"));
const repositories = tslib_1.__importStar(require("../repositories"));
exports.userMiddlewares = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    res.locals.username = req.session.username;
    next();
});
exports.logindifferentpage = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (req.session.username === undefined) {
        res.redirect('/login');
    }
    else {
        next();
    }
});
exports.index = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    res.locals.username = req.session.username;
    res.render('pages/index.ejs');
});
exports.getlogin = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if ((!req.session.loginedin)) {
        res.render('pages/login');
    }
    else {
        next();
    }
});
exports.test = (req, res, _) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    res.render('pages/test', {
        data: req.session
    });
});
exports.postlogin = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    try {
        const userRepo = new repositories.UserRepo(sequelize_1.default);
        if (yield userRepo.verifyAccount(username, password)) {
            req.session.username = username;
            req.session.loginedin = true;
            res.locals.username = 'Username';
            res.redirect('/');
        }
        else {
            res.redirect('/login');
        }
    }
    catch (error) {
        throw error;
    }
});
//# sourceMappingURL=home.js.map