import styled from "styled-components";

import { StyledButton } from "../containers/AddTodo.styles";

const StyledTableRow = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: grey;
  }
`;

const StyledTableData = styled.td`
  font-size: 24px;
`;

const Todo = ({ onClick, completed, text, id, onDelete }) => (
  <StyledTableRow onClick={onClick}>
    {completed ? (
      <StyledTableData>✔︎</StyledTableData>
    ) : (
      <StyledTableData>🔜</StyledTableData>
    )}
    <StyledTableData>{text}</StyledTableData>
    <StyledTableData>
      <StyledButton id={id} onClick={onDelete}>
        Delete
      </StyledButton>
    </StyledTableData>
  </StyledTableRow>
);

export default Todo;
