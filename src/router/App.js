import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  // HashRouter,
  // hashHistory,
  Switch,
  Route
} from "react-router-dom"
import asyncComponent from "./../lazy/index";

// import Father from "./../pages/site/father";
// import Child from "./../components/child";

const Index = asyncComponent(() => import('./../pages/site/index'))
const Back = asyncComponent(() => import("./../pages/site/back"))

// import Index from "./../pages/site/index"
// import Back from "./../pages/site/back";

export default class App extends Component {
    render() {
        return (
          <Router basename="/">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/detail/:id" component={Back} />
              
            </Switch>
          </Router>
          // <HashRouter history={hashHistory}>
          //   <Switch>
          //     <Route exact path="/" component={Index} />
          //     <Route exact path="/detail" component={Back} />
          //   </Switch>
          // </HashRouter>
        );
    }
}