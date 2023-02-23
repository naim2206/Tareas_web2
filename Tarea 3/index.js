const express = require("express");
const routes = require("./src/routes");
const path = require("path");
const { engine } = require("express-handlebars");

const app = express();
const port = 3000;

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.use("/dist/css", express.static(path.join(__dirname, "dist", "css")));
app.use("/img", express.static(path.join(__dirname, "img")));

app.use("", routes);

app.listen(port, function () {
    console.log("app is running on port: ", port);
});
