import React, { Component, Fragment, lazy, Suspense } from "react";
import { Route, Link } from "react-router-dom";
import Child from "./Child";
import { Steps } from "antd";

const { Step } = Steps;

const createBrowserHistory = require("history").createBrowserHistory;

const history = createBrowserHistory({
  forceRefresh: true
});

class About extends Component {
  state = {
    current: 0
  };
  onChange = (current) => {
    this.setState({
      current
    });
  };
  render() {
    const { current } = this.state;
    return (
      <Fragment>
        <h1 id='about'>About</h1>
        <Link to='/about/child'>Child</Link>
        <div>
          <Route path='/about/child' component={Child} />
        </div>
        <div onClick={() => history.push("/message")}>通向message的链接</div>
        <div>
          <Steps
            current={current}
            onChange={(current) => {
              console.log(current);
            }}>
            <Step title='Finished' labelPlacement='vertical' description='This is a description.' />
            <Step
              title='In Progress'
              subtitle='Left 00:00:08'
              description='This is a description.'
            />
            <Step title='Waiting' description='This is a description.' />
          </Steps>
        </div>
      </Fragment>
    );
  }
}

export default About;
