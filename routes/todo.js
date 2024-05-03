const path = require('path');
const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todoController');

router.get('/gettodos', todoController.getGetTodos);
router.post('/addtodos', todoController.postAddTodos);
router.post('/deletetodos', todoController.postDeleteTodos);
router.get('/increase', todoController.getIncreasePriority);
router.get('/delete', todoController.getDecreasePriority);

module.exports= router;