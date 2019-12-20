import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./Root.css";

class Root extends Component {
    render() {
        return (
            <div className="Root">
                <h1> Hello, World! </h1>
            </div>
        );
    }
}

export default hot(module)(Root);