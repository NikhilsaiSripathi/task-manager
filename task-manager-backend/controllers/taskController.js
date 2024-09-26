const Task = require('../models/Task');


const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTaskById = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findById(id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const createTask = async (req, res) => {
    const { title, description, status, dueDate } = req.body;
    if (!title || !status) {
        return res.status(400).json({ message: 'Title and Status are required' });
    }

    try {
        const newTask = await Task.create({ title, description, status, dueDate });
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, status, dueDate } = req.body;

    try {
        const updatedTask = await Task.findByIdAndUpdate(id, { title, description, status, dueDate }, { new: true });
        if (!updatedTask) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
};
