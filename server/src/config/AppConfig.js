const dotEnv = require("dotenv");
dotEnv.config();

const APP_CONFIG = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
};

module.exports = APP_CONFIG;
