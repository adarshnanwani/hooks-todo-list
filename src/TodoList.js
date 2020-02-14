import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <Paper>
      <List>
        {todos.map(todo => (
          <>
            <Todo
              task={todo.task}
              key={todo.id}
              id={todo.id}
              completed={todo.completed}
              removeTodo={removeTodo}
            />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
