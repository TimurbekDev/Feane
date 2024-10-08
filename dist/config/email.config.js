"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailConfig = void 0;
const emailConfig = () => ({
    email: {
        host: process.env.EMAIL_HOST,
        username: process.env.EMAIL_USERNAME,
        password: process.env.EMAIL_PASSWORD,
    },
});
exports.emailConfig = emailConfig;
//# sourceMappingURL=email.config.js.map