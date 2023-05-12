import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

import {
  AddTodoWrapper,
  StyledForm,
  StyledInput,
  StyledButton,
} from "./AddTodo.styles";

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <AddTodoWrapper>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();

          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <label for="name">Name</label>
        <StyledInput ref={(node) => (input = node)} name="name" />
        <StyledButton type="submit">Add</StyledButton>
      </StyledForm>
    </AddTodoWrapper>
  );
};

export default connect()(AddTodo);
