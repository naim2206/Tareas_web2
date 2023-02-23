const router = require("express").Router();

const routesPages = require("./pages");

router.use("", routesPages);

module.exports = router;
