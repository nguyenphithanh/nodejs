"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.common = {
    hash: {
        generate: function (password) {
            var passwordHash = require('password-hash');
            var hashedPassword = passwordHash.generate(password);
            return hashedPassword;
        },
        verity: function (password, hashedPassword) {
            var passwordHash = require('password-hash');
            return passwordHash.verify(password, hashedPassword);
        }
    },
    fibonacci: {}
};
//# sourceMappingURL=common.js.map