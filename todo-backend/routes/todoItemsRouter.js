const express = require("express");
const todoItemsRouter = express.Router();
const todoItemsController = require("../controllers/todoItemsController");

/**
 * #swagger.tags = ['Todo']
 * #swagger.summary = 'Get all todo items'
 */
todoItemsRouter.get("/todo", todoItemsController.getTodoItems);

/**
 * #swagger.tags = ['Todo']
 * #swagger.summary = 'Create a new todo item'
 * #swagger.requestBody = {
 *   required: true,
 *   content: {
 *     "application/json": {
 *       schema: { $ref: "#/definitions/Todo" }
 *     }
 *   }
 * }
 */
todoItemsRouter.post("/todo", todoItemsController.createTodoItem);

/**
 * #swagger.tags = ['Todo']
 * #swagger.summary = 'Delete a todo item'
 */
todoItemsRouter.delete("/todo/:id", todoItemsController.deleteTodoItem);

/**
 * #swagger.tags = ['Todo']
 * #swagger.summary = 'Mark todo as completed'
 */
todoItemsRouter.put("/todo/:id/completed", todoItemsController.markCompleted);

module.exports = todoItemsRouter;