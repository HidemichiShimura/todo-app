const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "DELETE_TODO":
      const ID = action.id;
      let idIdx;

      state.forEach((elem, idx) => {
        if (elem.id === ID) idIdx = idx;
      });
      return state.filter((elem) => elem.id !== idIdx);
    default:
      return state;
  }
};

export default todosReducer;
