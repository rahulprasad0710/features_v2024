const express = require("express");
const app = express();
const routes = require("./routes");
const { PORT } = require("./config/AppConfig");
const rateLimiterMiddleware = require("./config/rateLimiter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimiterMiddleware);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api", routes);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
