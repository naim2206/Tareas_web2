const router = require("express").Router();

const rutasHome = require("./routes");

router.use("", rutasHome);

module.exports = router;
