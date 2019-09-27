import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";
import Children from "./Children";

class Child extends Component {
  state = {
    count: 0
  };

  setCount = (params) => {
    if (params) {
      this.setState({
        count: params.count
      });
    } else {
      const { count } = this.state;
      this.setState({
        count: count + 1
      });
    }
  };

  render() {
    const { count } = this.state;
    return (
      <Fragment>
        <h1>Child</h1>
        <h2>{count}</h2>
        {/* <Link to="/about/child/1">child's child</Link>
         <Route path="/about/child/:id" component={Children}>
         </Route> */}
        <button onClick={() => this.setCount()}>点击</button>
        <Children setParentCount={this.setCount} />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(Child);
