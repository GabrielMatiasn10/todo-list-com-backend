const express = require('express');
const tasksController = require ('./controllers/tasksController')
const tasksMiddleware = require('./middlewares/tasksMiddleware')

const router = express.Router();


router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddleware. validatefieldTitle,tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id', 
tasksMiddleware. validatefieldTitle,
 tasksMiddleware.validateFieldStatus, 
 tasksController.updateTask,
 );
    

module.exports = router;