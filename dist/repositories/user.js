"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const user_1 = tslib_1.__importDefault(require("../models/user"));
const common_1 = require("../utils/common");
class UserRepository {
    constructor(db) {
        this.model = user_1.default(db);
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.model.findAll();
        });
    }
    findById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.model.findById(id);
        });
    }
    add(nUser) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.model.create(nUser);
        });
    }
    updateById(id, updateUser) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const entity = yield this.model.findById(id);
            if (entity === null) {
                throw new Error(`entity with id ${id} not found`);
            }
            return this.model.update(updateUser, { where: { id } });
        });
    }
    deleteById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const entity = yield this.model.findById(id);
            if (entity === null) {
                throw new Error(`entity with id ${id} not found`);
            }
            return this.model.destroy({ where: { id } });
        });
    }
    verifyAccount(username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const users = yield this.findAll();
            for (const user of users) {
                if (user.userName === username && common_1.common.hash.verity(password, user.password)) {
                    return true;
                }
            }
            return false;
        });
    }
}
exports.default = UserRepository;
//# sourceMappingURL=user.js.map