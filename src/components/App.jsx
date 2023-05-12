import AddTodo from "../containers/AddTodo";
import TodoList from "../containers/TodoList";

import styled from "styled-components";

const ContentWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-image: url(/images/blob.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Heading = styled.p`
  color: var(--color-white);
  font-size: 48px;
  font-family: "Playfair Display";
`;

function App() {
  return (
    <div className="App">
      <ContentWrapper>
        <Heading>Todo App</Heading>
        <AddTodo />
        <TodoList />
      </ContentWrapper>
    </div>
  );
}

export default App;
