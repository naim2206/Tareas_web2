const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("menu");
});

router.get("/bio", (req, res) => {
    res.render("bio");
});

router.get("/photos", (req, res) => {
    res.render("photos");
});

router.get("*", (req, res) => {
    res.render("not_found");
});

module.exports = router;
