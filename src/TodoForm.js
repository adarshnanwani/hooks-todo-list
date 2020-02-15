import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import { TodosContext } from "./contexts/todos.context";

const TodoForm = () => {
  const [task, updateTask, resetTask] = useInputState("");
  const { addTodo } = useContext(TodosContext);
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo(task);
          resetTask();
        }}
      >
        <TextField
          value={task}
          onChange={updateTask}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
