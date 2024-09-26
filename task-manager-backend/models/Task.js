const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        required: true,
        enum: ['To Do', 'In Progress', 'Done'],
    },
    dueDate: {
        type: Date,
    },
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
