import styled from "styled-components";

export const AddTodoWrapper = styled.div`
  width: 85%;
  max-width: 500px;
  background-color: var(--color-white);
  padding: 50px;
  border-radius: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledInput = styled.input`
  height: 30px;
  font-size: 24px;
`;

export const StyledButton = styled.button`
  min-width: 70px;
  padding: 6px 12px;
  align-self: center;
  font-size: 18px;
  color: var(--color-white);
  background-color: var(--color-purple);
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
