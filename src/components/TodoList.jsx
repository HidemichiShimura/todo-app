import styled from "styled-components";

import { Todo } from "./index";

const StyledTable = styled.table`
  width: 85%;
  max-width: 500px;
  background-color: var(--color-white);
`;

const StyledTableHeader = styled.tr`
  color: var(--color-black);
  background-color: var(--color-grey);
`;

const StyledTableHeaderData = styled.td`
  font-size: 24px;
`;

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <StyledTable>
    <StyledTableHeader>
      <StyledTableHeaderData>Done</StyledTableHeaderData>
      <StyledTableHeaderData>Name</StyledTableHeaderData>
      <StyledTableHeaderData>Delete</StyledTableHeaderData>
    </StyledTableHeader>
    {todos.map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
        onDelete={() => deleteTodo(todo.id)}
      />
    ))}
  </StyledTable>
);

export default TodoList;
