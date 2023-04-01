const express = require("express");
const {
    postTarea,
    putTareaID,
    getTarea,
    getTareaID,
    deleteTareaID,
} = require("../controladores/tareas");
const router = express.Router();

/**
 * @swagger
 * /tareas:
 *  post:
 *    description: crear una nueva tarea
 *    parameters:
 *      - in: body
 *        name: titulo
 *        description: el titulo de la tarea
 *        schema:
 *          type: string
 *      - in: body
 *        name: descripcion
 *        description: la descripcion de la tarea
 *        schema:
 *          type: string
 *      - in: body
 *        name: status
 *        description: el status de la tarea
 *        schema:
 *          type: string
 *      - in: body
 *        name: fecha
 *        description: la fecha de la tarea
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: tarea creada
 *      400:
 *        description: algo salió mal
 */
router.post("", express.json(), postTarea);

/**
 * @swagger
 * /tareas/:id:
 *  put:
 *    description: actualizar una tarea
 *    parameters:
 *      - in: body
 *        name: titulo
 *        description: el titulo de la tarea
 *        schema:
 *          type: string
 *      - in: body
 *        name: descripcion
 *        description: la descripcion de la tarea
 *        schema:
 *          type: string
 *      - in: body
 *        name: status
 *        description: el status de la tarea
 *        schema:
 *          type: string
 *      - in: body
 *        name: fecha
 *        description: la fecha de la tarea
 *        schema:
 *          type: string
 *      - in: params
 *        name: id
 *        description: id de la tarea a actualizar
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: tarea actualizada
 *      400:
 *        description: algo salió mal
 */
router.put("/:id", express.json(), putTareaID);

/**
 * @swagger
 * /tareas:
 *  get:
 *    description: obtener lista de tareas
 *    responses:
 *      200:
 *        description: lista de tareas
 *      400:
 *        description: algo salió mal
 */
router.get("", getTarea);

/**
 * @swagger
 * /tareas/:id:
 *  get:
 *    description: obtener una tarea a partir de un ID
 *    parameters:
 *      - in: params
 *        name: id
 *        description: id de la tarea a obtener
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: tarea obtenida
 *      400:
 *        description: algo salió mal
 */
router.get("/:id", getTareaID);

/**
 * @swagger
 * /tareas/:id:
 *  delete:
 *    description: eliminar una tarea
 *    parameters:
 *      - in: params
 *        name: id
 *        description: id de la tarea a eliminar
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: tarea eliminada
 *      400:
 *        description: algo salió mal
 */
router.delete("/:id", deleteTareaID);

module.exports = router;
