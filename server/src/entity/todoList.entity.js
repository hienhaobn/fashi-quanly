const mongoose = require('mongoose');

const todoListSchema = mongoose.Schema({
    title: String,
    isComplete: {
        type: Boolean,
        default: false
    },
    children: [],
    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('TodoList', todoListSchema);