import React from "react";
import ReactDOM from "react-dom/client";

import { createStore } from "redux";
import { Provider } from "react-redux";
import todosReducer from "./reducers";

import { App } from "./components";
import GlobalStyle from "./styles/GlobalStyle";

const store = createStore(
  todosReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
