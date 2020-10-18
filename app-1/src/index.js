import React from "react";
import ReactDOM from "react-dom";

import {Header} from "./components"

export function App() {
    return (
        <Header />
    );
}

ReactDOM.render(<App />, document.getElementById("root"))