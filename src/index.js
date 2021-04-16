import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import List from "./pages/ToDoList/index";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";

import { createStore } from "redux";
import { Provider } from "react-redux";
import myReducer from "./redux/reducers";
import App from "./App";

const myStore = createStore(myReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
