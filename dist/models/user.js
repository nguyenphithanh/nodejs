"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Sequelize = tslib_1.__importStar(require("sequelize"));
exports.default = (sqlize) => {
    return sqlize.define('invoice', {
        id: {
            type: Sequelize.BIGINT(20).UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        userName: {
            type: Sequelize.STRING(255),
        },
        password: {
            type: Sequelize.STRING(255),
        },
        createdAt: {
            type: Sequelize.DATE,
        },
        createdBy: {
            type: Sequelize.STRING(255),
        },
        updatedAt: {
            type: Sequelize.DATE,
        },
        updatedBy: {
            type: Sequelize.STRING(255),
        },
    }, {
        tableName: 'users',
    });
};
//# sourceMappingURL=user.js.map