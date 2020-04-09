"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    benchmark: true,
});
sequelize.authenticate().then(() => {
    console.log('MySQL server connected');
}).catch((err) => {
    console.log(`MySQL connection error ${err}`);
    process.exit();
});
exports.default = sequelize;
//# sourceMappingURL=sequelize.js.map