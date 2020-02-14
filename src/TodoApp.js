import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import uuid from "uuid/v4";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoApp = () => {
  const initialTodos = [
    { id: 1, task: "Feed the cat", completed: false },
    { id: 2, task: "Grow beard", completed: true },
    { id: 3, task: "Wash the car", completed: false }
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = newTodoText => {
    setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
  };
  const removeTodo = todoId => {
    const otherTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(otherTodos);
  };

  const toggleTodo = todoId => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const updateTodo = (todoId, text) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        todo.task = text;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            updateTodo={updateTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;

// Todo app
//  - Todo Form
//  - Todo List
//    - Todo Item
