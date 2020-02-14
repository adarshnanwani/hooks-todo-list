import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";

const EditTodoForm = ({ id, task, toggle, updateTodo }) => {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        updateTodo(id, value);
        reset();
        toggle();
      }}
    >
      <TextField
        value={value}
        onChange={handleChange}
        fullWidth
        label="Edit Todo"
        margin="normal"
      />
    </form>
  );
};

export default EditTodoForm;