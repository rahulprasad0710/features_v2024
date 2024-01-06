const express = require("express");
const app = express();
const routes = require("./routes");

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
