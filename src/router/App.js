import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Index from "./../pages/site/index";
import Back from "./../pages/site/back";


export default class App extends Component {
    render() {
        return (
          <Router basename="/">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/detail" component={Back} />
            </Switch>
          </Router>
        );
    }
}