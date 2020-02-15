import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todos.context";

const EditTodoForm = ({ id, task, toggle }) => {
  const [value, handleChange, reset] = useInputState(task);
  const dispatch = useContext(DispatchContext);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: "EDIT", text: value, todoId: id });
        reset();
        toggle();
      }}
      style={{
        marginLeft: "1rem",
        width: "90%"
      }}
    >
      <TextField
        value={value}
        onChange={handleChange}
        fullWidth
        label="Edit Todo"
        margin="normal"
        autoFocus
      />
    </form>
  );
};

export default EditTodoForm;
