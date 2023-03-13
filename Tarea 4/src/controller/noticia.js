const selectNoticia = require("../model/noticia");

function getNoticia(req, res) {
    const q = req.params.q;
    selectNoticia(q).then((response) => {
        let data = response.articles;
        res.render("noticia", { data });
    });
}

module.exports = getNoticia;
