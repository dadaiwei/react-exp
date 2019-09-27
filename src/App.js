import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./router/index";
import store from "./redux/store";
import { Provider } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
