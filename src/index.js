import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import $ from "jquery";
import hopscotch from "hopscotch";
import "hopscotch/dist/css/hopscotch.min.css";

var tour = {
  id: "hello-hopscotch",
  steps: [
    {
      title: "My Header",
      content: "This is the header of my page.",
      target: "start",
      placement: "bottom"
    },
    {
      title: "My content",
      content: "Here is where I put my content.",
      target: "content",
      placement: "bottom"
    },
    {
      title: "My content3",
      content: "Here is where I put my content3.",
      target: "about",
      placement: "bottom"
    }
  ]
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
