import uuid from "uuid/v4";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: uuid(), task: action.newTodoText, completed: false }
      ];
    case "EDIT":
      return state.map(todo => {
        if (todo.id === action.todoId) {
          todo.task = action.text;
        }
        return todo;
      });
    case "REMOVE":
      return state.filter(todo => todo.id !== action.todoId);
    case "TOGGLE":
      return state.map(todo => {
        if (todo.id === action.todoId) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    default:
      return state;
  }
};

export default reducer;
