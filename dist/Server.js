"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cookie_parser_1 = tslib_1.__importDefault(require("cookie-parser"));
const express_1 = tslib_1.__importDefault(require("express"));
const morgan_1 = tslib_1.__importDefault(require("morgan"));
const path_1 = tslib_1.__importDefault(require("path"));
const api_1 = tslib_1.__importDefault(require("./routes/api"));
const routes_1 = tslib_1.__importDefault(require("./routes"));
const express_ejs_layouts_1 = tslib_1.__importDefault(require("express-ejs-layouts"));
const app = express_1.default();
const session = require('express-session');
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cookie_parser_1.default());
app.use(express_ejs_layouts_1.default);
app.set('views', `${__dirname}/../src/views`);
app.set('view engine', 'ejs');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use('/api', api_1.default);
app.use('/', routes_1.default);
const staticDir = path_1.default.join(__dirname, 'public');
app.use(express_1.default.static(staticDir));
exports.default = app;
//# sourceMappingURL=Server.js.map