import React from "react";
import ReactDOM from "react-dom";
import Child1 from "./Child1";

import "./index.css";

const App = () => (
  <div className="container">
    <Child1 />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
