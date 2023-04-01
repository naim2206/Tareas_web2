const Tarea = require("../modelos/tarea");

function postTarea(req, res) {
    Tarea.create(req.body)
        .then((data) => res.send(data))
        .catch((error) => res.status(400).send("algo salió mal"));
}

function putTareaID(req, res) {
    let id = req.params.id;
    Tarea.findOneAndUpdate({ _id: id }, req.body, { returnDocument: "after" })
        .then((tareas) => {
            res.send(tareas);
        })
        .catch((error) => {
            res.status(400).send("algo salió mal");
        });
}

function getTarea(req, res) {
    Tarea.find({})
        .then((tareas) => {
            res.send(tareas);
        })
        .catch((error) => {
            res.status(400).send("algo salió mal");
        });
}

function getTareaID(req, res) {
    const id = req.params.id;
    Tarea.find({ _id: id })
        .then((tareas) => {
            res.send(tareas);
        })
        .catch((error) => {
            res.status(400).send("algo salió mal");
        });
}

function deleteTareaID(req, res) {
    const id = req.params.id;
    Tarea.findOneAndDelete({ _id: id })
        .then((tareas) => {
            res.send(tareas);
        })
        .catch((error) => {
            res.status(400).send("algo salió mal");
        });
}

module.exports = { postTarea, putTareaID, getTarea, getTareaID, deleteTareaID };
