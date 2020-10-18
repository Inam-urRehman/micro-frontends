import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {BuildTimeIntegration, IframeIntegration} from "./components"

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/build-time-integration">Build Time Integration</Link>
            </li>
            <li>
              <Link to="/run-time-integration-via-iframe">Run Time Integration Via iframe</Link>
            </li>
            {/* <li>
              <Link to="/run-time-integration-via-js">Run Time Integration Via Javascript</Link>
            </li> */}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/build-time-integration">
            <BuildTimeIntegration />
          </Route>
          <Route path="/run-time-integration-via-iframe">
            <IframeIntegration />
          </Route>
          {/* <Route path="/run-time-integration-via-js">
            <JsIntegration />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
