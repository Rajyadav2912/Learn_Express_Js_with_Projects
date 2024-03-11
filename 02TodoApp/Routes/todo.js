const express = require("express");
const router = express.Router();

// import Controller
const { createTodo } = require("../Controller/createTodo");
const { getTodo, getTodoById } = require("../Controller/getTodo");
const { updateTodo } = require("../Controller/updatedTodo");
const { deleteTodo } = require("../Controller/deleteTodo");
// define API routes
router.post("/createTodo", createTodo);

router.get("/getTodos", getTodo);
router.get("/getTodos/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;
