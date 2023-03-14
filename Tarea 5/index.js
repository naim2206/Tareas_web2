const express = require("express");
const routes = require("./src/rutas");
const mongoose = require("mongoose");
require("dotenv").config();

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerConf = require("./swagger.config");
const swaggerDocs = swaggerJsDoc(swaggerConf);

const app = express();
const mongoURL = process.env.MONGO_URL;
// console.log(mongoURL);
const port = process.env.PORT || 3000;

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("", routes);

mongoose
    .connect(mongoURL)
    .then(() => {
        console.log("se conectó correctamente a la base de datos");
        app.listen(port, function () {
            console.log("app is running on port: ", port);
        });
    })
    .catch((err) => console.log("no se pudo conectar a la base de datos", err));
