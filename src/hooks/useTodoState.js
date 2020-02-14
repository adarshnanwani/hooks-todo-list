import { useState } from "react";
import uuid from "uuid/v4";

export default (initialTodos = []) => {
  const [todos, setTodos] = useState(initialTodos);
  return {
    todos,
    addTodo: newTodoText => {
      setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    },
    removeTodo: todoId => {
      const otherTodos = todos.filter(todo => todo.id !== todoId);
      setTodos(otherTodos);
    },
    toggleTodo: todoId => {
      const updatedTodos = todos.map(todo => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      setTodos(updatedTodos);
    },
    updateTodo: (todoId, text) => {
      const updatedTodos = todos.map(todo => {
        if (todo.id === todoId) {
          todo.task = text;
        }
        return todo;
      });
      setTodos(updatedTodos);
    }
  };
};
