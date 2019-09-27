import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>home</h1>
        <ul>
          <li>
            <Link to='/'>首页</Link>
          </li>
          <li>
            <Link to='/form'>form</Link>
          </li>
          <li>
            <Link to={{ pathname: "/about" }}>about</Link>
          </li>
          <li>
            <Link to='/counter'>counter</Link>
          </li>
          <li>
            <Link to='/count'>count</Link>
          </li>
          <li>
            <Link to='/pureComponent'>pureComponent</Link>
          </li>
          <li>
            <Link to='/exp'>exp</Link>
          </li>
          <li>
            <Link to='/inbox'>inbox</Link>
          </li>
          <li>
            <Link to='/message'>message</Link>
          </li>
          <li>
            <Link to='/basicExample'>BasicExample</Link>
          </li>
          <li>
            <Link to='/draggableExp'>draggableExp</Link>
          </li>
          <li>
            <Link to='/other'>other</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
