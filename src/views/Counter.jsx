import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../redux/actionTypes";

class Children1 extends React.Component {
  constructor(props) {
    super(props);
    console.log("children1 constructor");
  }
  componentWillReceiveProps() {
    console.log("children1 componentWillReceiveProps");
  }
  componentWillMount() {
    console.log("children1 componentWillMount");
  }
  componentDidMount() {
    console.log("children1 componentDidMount");
  }
  componentWillUpdate() {
    console.log("children1 componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("children1 componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("children1 componentWillUnmount");
  }
  render() {
    console.log("children1 render");
    return (
      <React.Fragment>
        <div>Children1</div>
      </React.Fragment>
    );
  }
}

class Children2 extends React.Component {
  constructor(props) {
    super(props);
    console.log("children2 constructor");
  }
  static getDerivedStateFromProps() {
    console.log("children2 getDerivedStateFromProps");
  }
  componentWillMount() {
    console.log("children2 componentWillMount");
  }
  componentDidMount() {
    console.log("children2 componentDidMount");
  }
  componentWillUpdate() {
    console.log("children2 componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("children2 componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("children2 componentWillUnmount");
  }
  render() {
    console.log("children2 render");
    return <div>Children2</div>;
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  increment = () => {
    this.props.increment();
    this.props.increment();
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  reset = () => {
    this.props.reset();
  };

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }

  render() {
    console.log("render");
    return (
      <div className='counter'>
        <h1>Counter</h1>
        <Children1></Children1>
        <Children2></Children2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span style={{ margin: "0 10px" }}>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <br />
        <div>
          <button onClick={this.reset}>reset</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

const mapDispatchToProps = {
  increment,
  decrement,
  reset
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
