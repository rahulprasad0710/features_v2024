const express = require("express");
const router = express.Router();

router.get("/rate-api1", (req, res) => {
    res.send("Hello World! from v1");
});

router.get("/", (req, res) => {
    const ipAddress =
        req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    console.log("ipAddress", ipAddress);
    res.send("Hello World! from v1");
});

router.get("/", (req, res) => {
    res.send("Hello World! from v1");
});

module.exports = router;
