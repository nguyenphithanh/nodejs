"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("../utils/common");
const shared_1 = require("../shared");
const sequelize_1 = tslib_1.__importDefault(require("../sequelize"));
const repositories = tslib_1.__importStar(require("../repositories"));
exports.listuser = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.session.username === undefined) {
            res.redirect('/login');
        }
        else {
            res.locals.username = req.session.username;
            const userRepo = new repositories.UserRepo(sequelize_1.default);
            const uservalues = yield userRepo.findAll();
            res.render('pages/listing', {
                users: uservalues
            });
        }
    }
    catch (error) {
        throw error;
    }
});
exports.getadduserpage = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (req.session.username === undefined) {
        res.redirect('/login');
    }
    else {
        res.locals.username = req.session.username;
        res.render('pages/adduser', {
            isError: false
        });
    }
});
exports.postadduserpage = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    res.locals.username = req.session.username;
    const userRepo = new repositories.UserRepo(sequelize_1.default);
    try {
        const user = req.body;
        const beforePassword = user.password;
        const MAX_LENGTH_USERNAME = 8;
        const MAX_LENGTH_PASSWORD = 8;
        let userNameErorr = '';
        let passwordError = '';
        let confirmPasswordError = '';
        let createUserError = '';
        let hasUserNameError = false;
        let hasPasswordError = false;
        let hasConfirmPasswordError = false;
        let hasCreateUserError = false;
        user.password = common_1.common.hash.generate(user.password);
        user.createdAt = new Date();
        user.createdBy = 'thai';
        user.updatedAt = new Date();
        user.updatedBy = 'thai';
        if (user.userName.length < MAX_LENGTH_USERNAME) {
            hasUserNameError = true;
            userNameErorr = 'username phải lớn hơn hoặc bằng 8 kí tự';
        }
        if (beforePassword.length < MAX_LENGTH_PASSWORD) {
            hasPasswordError = true;
            passwordError = 'username phải lớn hơn hoặc bằng 8 kí tự';
        }
        if (beforePassword !== user.password) {
            hasConfirmPasswordError = true;
            confirmPasswordError = 'Mật khẩu không trùng khớp';
        }
        if (!user) {
            hasCreateUserError = true;
            createUserError = 'user không hợp lệ';
        }
        const hasError = hasUserNameError || hasPasswordError || hasConfirmPasswordError || hasCreateUserError;
        if (hasError) {
            res.render('pages/adduser', {
                hasUserNameError: hasUserNameError,
                hasPasswordError: hasPasswordError,
                hasConfirmPasswordError: hasConfirmPasswordError,
                hasCreateUserError: hasCreateUserError,
                userNameErorr: userNameErorr,
                passwordError: passwordError,
                confirmPasswordError: confirmPasswordError,
                createUserError: createUserError
            });
        }
        else {
            delete user.confirmPassword;
            yield userRepo.add(user);
            const uservalues = yield userRepo.findAll();
            res.render('pages/listing', {
                users: uservalues
            });
        }
    }
    catch (err) {
        shared_1.logger.error(err.message, err);
    }
});
//# sourceMappingURL=admin.js.map