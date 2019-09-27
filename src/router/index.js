import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import About from "../views/About";
import Home from "../views/Home";
import Inbox from "../views/Inbox";
import Message from "../views/Message";
import Exp from "../views/Exp";
import BasicExample from "../views/BasicExample";
import Counter from "../views/Counter";
import DraggableExp from "../views/DraggableExp";
import NotFound from "../views/NotFound";
import Form from "../views/Form.jsx";
import Count from "../views/Count";

const About = lazy(() => import("../views/About"));
const AboutComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <About />
    </Suspense>
  );
};

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/form' component={Form}></Route>
    <Route path='/about' component={AboutComponent} />
    <Route path='/exp' component={Exp} />
    <Route path='/inbox' component={Inbox} />
    <Route path='/message' component={Message} />
    <Route path='/basicExample' component={BasicExample} />
    <Route path='/counter' component={Counter} />
    <Route path='/count' component={Count} />
    <Route path='/draggableExp' component={DraggableExp} />
    <Route path='/other' component={NotFound} />
  </Switch>
);

export default Main;
