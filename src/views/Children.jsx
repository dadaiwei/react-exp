import React, { Component } from 'react';

class Children extends Component {
  state = {
    count: 0
  }

  setCount = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1
    });
    this.props.setParentCount({
      count: 2 * ( count + 1)
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Children</h1>
        <h2>{ count }</h2>
        <button onClick={() => this.setCount()}>点击</button>
      </div>
    )
  }
}

export default Children;