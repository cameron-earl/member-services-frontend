import React, { Component } from "react";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router, Route } from "react-router-dom";

import News from "../containers/News/News";
import Forums from "../containers/Forums/Forums";
import Education from "../containers/Education/Education";
import Archives from "../containers/Archives/Archives";
import "./App.css";

class App extends Component {
  render() {
    return (
      <CookiesProvider>
        <Router>
          <div>
            <Route exact path="/" component={News} />
            <Route path="/forums" component={Forums} />
            <Route path="/archives" component={Archives} />
            <Route path="/eduweb" component={Education} />
          </div>
        </Router>
      </CookiesProvider>
    );
  }
}

export default App;
