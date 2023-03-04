const express = require("express");
const path = require("path");
const routes = require("./src/routes");
require("dotenv").config();

const { engine } = require("express-handlebars");
const app = express();

// const token = process.env.TOKEN;

const port = process.env.PORT || 3000;

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.use("/assets", express.static(path.join(__dirname, "assets")));

app.use("", routes);

app.listen(port, function () {
    console.log("app is running on port: ", port);
});
