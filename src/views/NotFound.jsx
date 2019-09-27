import React, { Component } from "react";

function Children(props) {
  return <div>{props.children}</div>;
}

class NotFound extends Component {
  render() {
    return (
      <div>
        <Children>
          <h2>This is a.</h2>
        </Children>
      </div>
    );
  }
}

export default NotFound;
