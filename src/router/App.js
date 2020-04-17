import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  // HashRouter,
  // hashHistory,
  Switch,
  Route
} from "react-router-dom"

import Index from "./../pages/site/index";
import Back from "./../pages/site/back";
import Father from "./../pages/site/father";
import Child from "./../components/child";


export default class App extends Component {
    render() {
        return (
          <Router basename="/">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/detail/:id" component={Back} />
              {/* <Route exact path="/father" component={
                  <Father>
                    <Route exact path="/child" component={Child} />
                  </Father>
                }
              /> */}
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