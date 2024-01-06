const express = require("express");
const app = express();
const routes = require("./routes");
const { PORT } = require("./config/AppConfig");

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api", routes);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
