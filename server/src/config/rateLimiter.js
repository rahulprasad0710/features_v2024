const rateLimiter = require("express-rate-limit");

const rateLimiterMiddleware = rateLimiter({
    windowMs: 60 * 1000, // 1 minute
    max: 5, // 5 requests,
    message: "You have exceeded the 5 requests in 1 minute limit!",
    headers: true,
});

module.exports = rateLimiterMiddleware;
