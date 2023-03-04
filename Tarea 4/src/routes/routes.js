const express = require("express");
const router = express.Router();
const getNoticia = require("../controller/noticia");

router.get("/", (req, res) => {
    res.render("home");
});

router.get("/:q", express.json(), getNoticia);

router.get("*", (req, res) => {
    res.render("not_found");
});

module.exports = router;
