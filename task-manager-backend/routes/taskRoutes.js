const express = require('express');
const {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
} = require('../controllers/taskController');
const { check, validationResult } = require('express-validator');  // Import express-validator

const router = express.Router();

// Validation middleware
const taskValidation = [
    check('title').notEmpty().withMessage('Title is required'),
    check('status').isIn(['To Do', 'In Progress', 'Done']).withMessage('Status must be "To Do", "In Progress", or "Done"'),
];

// Routes
router.get('/tasks', getTasks);
router.get('/tasks/:id', getTaskById);

// POST - Add a new task with validation
router.post('/tasks', taskValidation, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}, createTask);

// PUT - Update an existing task with validation
router.put('/tasks/:id', taskValidation, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}, updateTask);

router.delete('/tasks/:id', deleteTask);

module.exports = router;
