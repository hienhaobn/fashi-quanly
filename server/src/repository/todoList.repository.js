const TodoListEntity = require('../entity/todoList.entity');

module.exports = {
    'findTodosRepository': () => {
        return TodoListEntity.find();
    },
    'createTodoRepository': (dataTodo) => {
        const newTodo = new TodoListEntity(dataTodo);
        await newTodo.save();
        return newTodo;
    }
}