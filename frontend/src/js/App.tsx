import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Echo from "./Echo";

function defaultComponent(){
    return (
        <h1>Default</h1>
    );
}

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={defaultComponent}/>
                    <Route path="/:content" component={Echo} />
                </Switch>
            </Router>
        );
    }
}

export default App;