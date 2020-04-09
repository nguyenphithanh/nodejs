"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const http_status_codes_1 = require("http-status-codes");
const common_1 = require("../../utils/common");
const shared_1 = require("../../shared");
const shared_2 = require("../../shared");
const sequelize_1 = tslib_1.__importDefault(require("../../sequelize"));
const repositories = tslib_1.__importStar(require("../../repositories"));
exports.getUsers = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const userRepo = new repositories.UserRepo(sequelize_1.default);
        const users = yield userRepo.findAll();
        return res.status(http_status_codes_1.OK).json({ users });
    }
    catch (err) {
        shared_1.logger.error(err.message, err);
        return res.status(http_status_codes_1.BAD_REQUEST).json({
            error: err.message,
        });
    }
});
exports.addUser = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const userRepo = new repositories.UserRepo(sequelize_1.default);
    try {
        const user = req.body;
        if (!user) {
            return res.status(http_status_codes_1.BAD_REQUEST).json({
                error: shared_2.paramMissingError
            });
        }
        user.password = common_1.common.hash.generate(user.password);
        yield userRepo.add(user);
        return res.status(http_status_codes_1.CREATED).end();
    }
    catch (err) {
        shared_1.logger.error(err.message, err);
        return res.status(http_status_codes_1.BAD_REQUEST).json({
            error: err.message,
        });
    }
});
exports.updateUser = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const userRepo = new repositories.UserRepo(sequelize_1.default);
    try {
        const user = req.body;
        if (!user) {
            return res.status(http_status_codes_1.BAD_REQUEST).json({
                error: shared_2.paramMissingError,
            });
        }
        const { id } = req.params;
        yield userRepo.updateById(Number(id), user);
        return res.status(http_status_codes_1.OK).end();
    }
    catch (err) {
        shared_1.logger.error(err.message, err);
        return res.status(http_status_codes_1.BAD_REQUEST).json({
            error: err.message,
        });
    }
});
exports.deleteUser = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const userRepo = new repositories.UserRepo(sequelize_1.default);
    try {
        const { id } = req.params;
        yield userRepo.deleteById(Number(id));
        return res.status(http_status_codes_1.OK).end();
    }
    catch (err) {
        shared_1.logger.error(err.message, err);
        return res.status(http_status_codes_1.BAD_REQUEST).json({
            error: err.message,
        });
    }
});
//# sourceMappingURL=user.js.map