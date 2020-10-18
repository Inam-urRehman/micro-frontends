import React from "react";
import ReactDOM from "react-dom";

import {Section} from "./components"

import "./styles/index.scss";

export function App() {
    return (
        <Section />
    );
}

ReactDOM.render(<App />, document.getElementById("root"))