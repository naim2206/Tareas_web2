const router = require("express").Router();

const rutasTareas = require("./tareas");

// router.use("", auth);
router.use("/tareas", rutasTareas);

module.exports = router;
